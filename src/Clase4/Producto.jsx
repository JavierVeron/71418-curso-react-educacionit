import { useEffect, useState } from "react";
import arrayProductos from "./json/arrayProductos.json"
import { useParams } from "react-router-dom";

const Producto = () => {
    const [item, setItem] = useState("");
    const [productoError, setProductoError] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        let producto = arrayProductos.find(item => item.id == id);

        if (producto) {
            setItem(producto);
        } else {
            setProductoError(true);
        }
    }, [id])

    return (
        <>
        {productoError ? <div className="alert alert-danger text-center" role="alert">Error! No se encontraron Productos!</div> : 
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-2">
                        <img src={item.imagen} alt={item.nombre} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h1>{item.nombre}</h1>
                        <h3 className="text-danger">${item.precio}</h3>
                        <p>Color: <b>{item.color}</b></p>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Producto