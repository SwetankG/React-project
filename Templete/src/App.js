import React from 'react'
import Navbar from './Component/Navbar';
import Contact from './Component/Contact';
import About from './Component/About'
import Home from './Component/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Blog from './Component/Blog';
import Vegetable from './Component/Vegetable';
import Shop from './Component/Shop';
import Login from './Component/Login';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/> 
    <Routes>
      <Route path='/' element= {<Home/>}>Home</Route>
      <Route path='/about' element= {<About/>}>About</Route>
      <Route path='/contact' element= {<Contact/>}>Contact</Route>
      <Route path='/blog' element= {<Blog/>}>Blog</Route>
      <Route path='/vegetable' element={<Vegetable/>}>Veget</Route>
      <Route path='/shop' element={<Shop/>}>Shop</Route>
      <Route path='/login' element={<Login/>}>login</Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
