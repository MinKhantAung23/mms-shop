import "./index.css"
import { Routes, Route } from 'react-router-dom'
import Products from "./pages/Products"
import Navbar from "./components/Navbar"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import Success from "./pages/Success"
import 'animate.css';
import Spinner from "./spinner/spinner"

function App() {
  return (
    <div className="container mx-auto bg-primary">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Products/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/success" element={<Success/>}></Route>
            <Route path="/detail/:id" element={<ProductDetail/>}></Route>
        </Routes>
    </div>
  )
}

export default App
