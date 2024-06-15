import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";

const GuiaDeEstilos = () => {
    const [tyc, setTyC] = useState(false);

    const redireccionar = () => {
        //let navegar = useNavigate();
        console.log(tyc);

        if (tyc) {
            console.log("Estoy acá");
            //navegar("/");
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2020/2_21/0/73/182/4830752.jpg" alt="Estilo #1" width={"100%"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src="https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2020/2_21/0/73/182/4830756.gif" alt="Estilo #1" width={"100%"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <input type="checkbox" onClick={(e) => {setTyC(tyc ? false : true)}} /> Acepto los Términos y Condiciones
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col text-center">
                        <button className="btn text-white bg-dark" onClick={redireccionar}>Volver a la Página Principal</button>
                    </div>
                </div>
            </div>
            {tyc && <Navigate to={"/"} />}
        </>
    )
}

export default GuiaDeEstilos