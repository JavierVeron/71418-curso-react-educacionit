import { useContext } from "react";
import { CartContext } from "../Clase5/context/CartContext";

const Carrito = () => {
    const {cart, vaciarCarrito, cantTotalProductos, sumaTotalProductos} = useContext(CartContext);

    if (cantTotalProductos() == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="text-center">No hay Productos Seleccionados!</h3>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3 className="text-center">Productos Seleccionados</h3>
                    <table className="table">
                    <tbody>
                        <tr>
                            <td colSpan={3} className="text-end"><button className="btn btn-sm text-white bg-dark" onClick={vaciarCarrito}>Vaciar Carrito [x]</button></td>
                        </tr>
                        {cart.map(item => (
                            <tr key={item.id}>
                                <td className="align-middle"><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                <td className="align-middle">{item.nombre}</td>
                                <td className="align-middle text-end">${item.precio}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={2} className="text-center">Total a Pagar</td>
                            <td className="text-end"><b>${sumaTotalProductos()}</b></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Carrito