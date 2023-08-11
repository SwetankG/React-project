import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="header_section">
         <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <Link className="navbar-brand"to="index.html"><img src="images/logo.png" alt=""/></Link>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                     <li className="nav-item">
                        <Link className="nav-<Link" to="/">Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-<Link" to="/shop">Shop</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-<Link" to="/about">About</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-<Link" to="/vegetable">Vegetable</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-<Link" to="/blog">Blog</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-<Link" to="/contact">Contact Us</Link>
                     </li>
                     <li className="nav-item">
                     <li><Link to="/login"><i className="nav-<Link fa fa-user" aria-hidden="true"></i></Link></li>
                     </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                     <div className="search_icon"><i className="fa fa-search" aria-hidden="true"></i></div>
                  </form>
               </div>
            </nav>
         </div>
      </div>
    </>
  )
}

export default Navbar

//{/* <<Link to='/'>About</<Link>
    //  <<Link to='/Contact'>Contact</<Link> */}