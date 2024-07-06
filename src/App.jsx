import './App.css'
import { Routes, Route } from "react-router-dom"
import PaginaPrincipal from './Clase4/PaginaPrincipal'
import GuiaDeEstilos from './Clase4/GuiaDeEstilos'
import Producto from './Clase4/Producto'
import NavBar from './Clase4/NavBar'
import Error404 from './Clase4/Error404'
import CartProvider from './Clase5/context/CartContext'
import Carrito from './Clase5/Carrito'
import Usuarios from './Clase5/Usuarios'
/* import ApiFetch from './Clase6/ApiFetch' */
/* import ApiAxios from './Clase6/ApiAxios' */
/* import Contador from './Clase7/Contador' */
import Tareas from './Clase7/Tareas'
/* import ApiXML from './Clase6/ApiXML' */

function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Tareas />} />
          <Route path={"/guia-de-estilos"} element={<GuiaDeEstilos />} />
          <Route path={"/color/:id"} element={<PaginaPrincipal />} />
          <Route path={"/producto/:id"} element={<Producto />} />
          <Route path={"/carrito"} element={<Carrito />} />
          <Route path={"/usuarios"} element={<Usuarios />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </CartProvider>
    </>
  )
}

export default App
