import { useEffect, useState } from "react"
import Loading from "./Loading";

const RenderizadoCondicional = ({mostrar}) => {
    const [visible, setVisible] = useState(mostrar);
    const [esperar, setEsperar] = useState(true);
    const [mostrarTexto, setMostrarTexto] = useState(false);
    console.log("1- Montaje del Componente");

    useEffect(() => {
        console.log("2- Actualización del Componente");
        setVisible(mostrar);
    }, [mostrar])

    useEffect(() => {
        setTimeout(() => {
            setEsperar(false)
        }, 3000)
    }, [])

    const cambiarEstado = () => {
        /* if (visible) {
            setVisible(false)
        } else {
            setVisible(true)
        } */

        setVisible(visible ? false : true);
    }

    return (
        esperar ? <Loading /> :
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Inicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">La Empresa</a>
                        </li>
                        <li className="nav-item">
                            {visible ? <a className="btn btn-warning" href="#"><b>Iniciar Sesión</b></a> : ""}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    <button className="btn btn-primary" onClick={cambiarEstado}>Cambiar Estado</button>
                </div>
            </div>
            {mostrarTexto && 
            <div className="row my-5">
                <div className="col text-center">
                    <p>Curso de React JS Developer - Educación IT</p>
                </div>
            </div>}
        </div>
    )
}

export default RenderizadoCondicional