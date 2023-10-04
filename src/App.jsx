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
import CheckOut from "./pages/CheckOut/CheckOut";
import Favorites from "./pages/Favorites/Favorites";
import Sale from "./pages/Sale/Sale";
import Authors from "./pages/Authors/Authors";
import Rating from "./pages/Rating/Rating";
import Author from "./pages/Author/Author";
import Delivery from "./pages/Delivery/Delivery";
import NewBooks from "./pages/NewBooks/NewBooks";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from "react-toastify";
import React from "react";
import MyOrder from "./pages/MyOrders/MyOrder";



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route path='' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cataloge' element={<Cataloge/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='/room' element={<Room/>}/>
          <Route path='/sale' element={<Sale/>}/>

          <Route path='/authors' element={<Authors/>}/>
          <Route path='/author/:id' element={<Author/>}/>

          <Route path='/rating' element={<Rating/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/delivery' element={<Delivery/>}/>
          <Route path='/newBooks' element={<NewBooks/>}/>
          <Route path='/myOrder' element={<MyOrder/>}/>
        </Route>

        <Route path='/login' element={<LogIn/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>

      <ToastContainer position="top-center"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeONClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover/>
    </>
  )
}

export default App
