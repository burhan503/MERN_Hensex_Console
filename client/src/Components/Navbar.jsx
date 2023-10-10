import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Login_icon from '../assets/login_icon.png'
export default function Navbar() {
  
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-md">

                    <Link className="navbar-brand" to="#">
                        <img src={Login_icon} alt="Logo" width="50" height="50" />
                        Hensex Console
                    </Link>
                    <div className="flex-grow-2"></div>
                   
                    <div className="flex-grow-1"></div>
                    <Link to="/Logout"><button className="btn btn-danger py-2 m-2">Logout</button></Link>
                </div>
            </nav>
        </>
    )
}
