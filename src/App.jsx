import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
/* import NavBar from './Clase4/NavBar' */
/* import Error404 from './Clase4/Error404'
import ProductList from './Clase8/ProductList'
import DetailProduct from './Clase8/DetailProduct'
import Cart from './Clase8/Cart' */
import TextBox from './Clase10/TextBox'
//import ReduxSagaComp from './Clase9/ReduxSagaComp'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path={"/"} element={<TextBox academia={"Educación IT"} curso={"Curso de React JS"}>
              <h4>Curso de Desarrollo Web + JavaScript</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed natus eaque magni porro numquam quas accusantium sapiente non deleniti suscipit nemo adipisci fugit debitis et, dicta inventore doloribus architecto explicabo!</p>
            </TextBox>
            } />
          {/* <Route path={"/color/:id"} element={<ProductList />} />
          <Route path={"/product/:id"} element={<DetailProduct />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"*"} element={<Error404 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
