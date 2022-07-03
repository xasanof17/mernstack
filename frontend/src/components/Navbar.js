import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar(){
  return(
    <>
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <Link to="/" className="my-0 mr-md-auto font-weight-normal"><h5>Бандит News</h5></Link>
      <nav className="my-4 my-md-0 mr-md-3 my-sm-3">
        <Link className="p-2 m-1 text-dark" to="/">Home</Link>
        <Link className="p-2 m-1 text-dark" to="/news">News</Link>
        <Link className="p-2 m-1 text-dark" to="/create">Create News</Link>
        <Link className="p-2 m-1 text-dark" to="/contact">Contact me</Link>
      </nav>
      <Link className="btn btn-outline-primary" to="/create">Create News</Link>
    </div>
  
    </>
  )
}