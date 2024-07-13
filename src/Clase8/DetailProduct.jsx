import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import { actions } from "./redux/actions";
import CuotasProduct from "./CuotasProduct";

const DetailProduct = () => {
    const items = useSelector(state => state.products);
    const dispatch = useDispatch();
    const {id} = useParams();
    const product = items.find(item => item.id == id);

    const agregarAlCarrito = (id) => {
        dispatch({type:"ADD_TO_CART", payload:id})
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img src={product.imagen} alt={product.nombre} className="img-fluid" />
                </div>
                <div className="col-md-5">
                    <h2>{product.nombre}</h2>
                    <p>Clásicas: <b>{product.clasicas ? "Sí" : "No"}</b></p>
                    <p>$ {product.precio}</p>
                    <p><CuotasProduct importe={product.precio} cuotas={6} /></p>
                    <p>Género: <b>{product.sexo == "m" ? "Masculino" : "Femenino"}</b></p>
                    <p>Color: <b>{product.color}</b></p>
                    <p><button className="btn btn-danger text-uppercase" onClick={() => {agregarAlCarrito(product.id)}}>Agregar Al Carrito</button></p>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct