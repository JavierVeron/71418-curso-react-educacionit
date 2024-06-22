import { createContext, useState } from "react";
import arrayProductos from "../../Clase4/json/arrayProductos.json"

export const CartContext = createContext();

const CartProvider = ({children}) => {
    // Un array (guardando los productos seleccionados) -> check
    // Una función de agregar productos -> check
    // Una función de vaciar carrito -> check
    // Una función calcular cantidad de productos
    // Una función calcular el total a pagar
    const [items, setItems] = useState(arrayProductos);
    const [cart, setCart] = useState([]);

    const agregarProducto = (id) => { //5
        const producto = items.find(item => item.id == id);
        setCart([...cart, producto]);
    }

    const vaciarCarrito = () => {
        setCart([]);
    }

    const cantTotalProductos = () => {
        return cart.length;
    }

    const sumaTotalProductos = () => {
        return cart.reduce((acumulador, item) => acumulador += item.precio, 0);
    }

    return <CartContext.Provider value={{cart, agregarProducto, vaciarCarrito, cantTotalProductos, sumaTotalProductos}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider