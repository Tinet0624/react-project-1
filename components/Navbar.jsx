import React from "react"
import logo from "../images/reactjs-icon.png"

export default function Navbar(){
    return(
        <div className="nav-container">
            <div className="brand">
                <img src={logo} alt="react-logo" className="logo"/>
                <p>ReactFacts</p>
            </div>
            
            <p className="links">React Course - Project 1</p>
        </div>
    )
}