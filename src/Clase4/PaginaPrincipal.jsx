import { Link, useParams, useSearchParams } from "react-router-dom"
import arrayProductos from "./json/arrayProductos.json"
import { useEffect, useState } from "react";

const PaginaPrincipal = () => {
    const [items, setItems] = useState(arrayProductos);
    const {id} = useParams();
    const [filtrar, setFiltrar] = useSearchParams();

    const filtrarClasicos = filtrar.get("clasicos");
    const filtrarSexo = filtrar.get("sexo");
    
    useEffect(() => {
        let productos = id ? arrayProductos.filter(item => item.color == id) : arrayProductos;
        
        if (filtrarClasicos) {
            productos = productos.filter(item => item.clasicas == filtrarClasicos)
        }

        if (filtrarSexo) {
            productos = productos.filter(item => item.sexo == filtrarSexo)
        }
        
        setItems(productos);
    }, [id, filtrarClasicos, filtrarSexo])

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    {items.map(item => (
                        <div key={item.id} className="col-md-4 text-center">
                            <div className="card border-0">
                                <Link to={"/producto/" + item.id}>
                                    <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                                </Link>
                                <div className="card-body">
                                    <p className="card-title"><b>{item.nombre}</b></p>
                                    <p className="card-title">${item.precio}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PaginaPrincipal