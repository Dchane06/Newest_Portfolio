// import * as ReactBootStrap from "react-bootstrap";
import React from 'react';
import logo from '../logo.png';

const NavBar = () => {
    return (
        <>
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default NavBar;