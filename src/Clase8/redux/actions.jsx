export const actions = {
    agregarProducto:(producto) => ({type:"ADD_PRODUCT", payload:producto}),
    quitarProducto:(idProducto) => ({type:"REMOVE_PRODUCT", payload:idProducto}),
    agregarAlCarrito:(idProducto) => ({type:"ADD_TO_CART", payload:idProducto}),
    quitarDelCarrito:(idProducto) => ({type:"REMOVE_FROM_CART", payload:idProducto}),
}