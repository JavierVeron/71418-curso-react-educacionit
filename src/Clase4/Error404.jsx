import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-danger" role="alert">
                        <h1>Error 404!</h1>
                        <h3>La página que estás buscando no existe!</h3>
                        <Link to={"/"} className="btn text-white bg-dark my-5">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error404