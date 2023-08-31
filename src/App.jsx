import {Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Cataloge from "./pages/Cataloge/Cataloge";
import Room from "./pages/Room/Room";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import NotFound from "./pages/NotFound/NotFound";
import './styles/style.scss'
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";
import Favorites from "./pages/Favorites/Favorites";
import CheckOut from "./pages/CheckOut/CheckOut";
import Sale from "./pages/Sale/Sale";
import Author from "./pages/Author/Author";
import Rating from "./pages/Rating/Rating";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cataloge' element={<Cataloge/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='/room' element={<Room/>}/>
          <Route path='/sale' element={<Sale/>}/>
          <Route path='/author' element={<Author/>}/>
          <Route path='/rating' element={<Rating/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>

        <Route path='/login' element={<LogIn/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>
    </>
  )
}

export default App
