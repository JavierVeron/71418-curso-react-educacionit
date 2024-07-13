import { useSelector, useDispatch } from "react-redux"

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const vaciarCarrito = () => {
        dispatch({type:"CLEAR_CART"})
    }

    const quitarProductoDelCarrito = (id) => {
        dispatch({type:"REMOVE_FROM_CART", payload:id})
    }

    if (cart.length == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h1 className="display-6 text-center">No se encontraron Productos Seleccionados!</h1>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1 className="display-6 text-center">Productos Seleccionados</h1>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={5} className="align-middle text-end"><button className="btn btn-danger" title="Vaciar Carrito" onClick={() => {vaciarCarrito()}}>Vaciar Carrito 🧹</button></td>
                            </tr>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="align-middle"><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="align-middle">$ {item.precio} X {item.cantidad}</td>
                                        <td className="align-middle">$ {item.precio * item.cantidad}</td>
                                        <td className="align-middle text-end"><button className="btn btn-danger" title="Eliminar Producto" onClick={() => {quitarProductoDelCarrito(item.id)}}>Eliminar 🚮</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart