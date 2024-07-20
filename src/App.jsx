import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './Clase4/NavBar'
import Error404 from './Clase4/Error404'
import ProductList from './Clase8/ProductList'
import DetailProduct from './Clase8/DetailProduct'
import Cart from './Clase8/Cart'
import ReduxSagaComp from './Clase9/ReduxSagaComp'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ReduxSagaComp />} />
          <Route path={"/color/:id"} element={<ProductList />} />
          <Route path={"/product/:id"} element={<DetailProduct />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
