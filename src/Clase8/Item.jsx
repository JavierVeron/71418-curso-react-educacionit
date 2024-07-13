import { Link } from "react-router-dom"
import CuotasProduct from "./CuotasProduct"

const Item = ({producto}) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card border-0">
                <Link to={"/product/" + producto.id}>
                    <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                </Link>
                <div className="card-body">
                    <p className="card-text"><b>{producto.nombre}</b><br />$ {producto.precio}<br /><CuotasProduct importe={producto.precio} cuotas={6} /></p>
                </div>
            </div>
        </div>
    )
}

export default Item