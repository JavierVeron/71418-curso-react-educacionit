import './App.css'
import { Routes, Route } from "react-router-dom"
import PaginaPrincipal from './Clase4/PaginaPrincipal'
import GuiaDeEstilos from './Clase4/GuiaDeEstilos'
import Producto from './Clase4/Producto'
import NavBar from './Clase4/NavBar'
import Error404 from './Clase4/Error404'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<PaginaPrincipal />} />
        <Route path={"/guia-de-estilos"} element={<GuiaDeEstilos />} />
        <Route path={"/color/:id"} element={<PaginaPrincipal />} />
        <Route path={"/producto/:id"} element={<Producto />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
