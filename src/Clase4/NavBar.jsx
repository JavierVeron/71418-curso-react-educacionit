import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <Link to={"/"}>
                            <img src="https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2017/7_13/0/29/175/1945413.png" alt="VANS" width={120} />
                        </Link>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link text-dark">Principal</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/guia-de-estilos"} className="nav-link text-dark">Guía de Estilos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/color/blancas"} className="nav-link text-dark">Zapatillas Blancas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/color/negras"} className="nav-link text-dark">Zapatillas Negras</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar