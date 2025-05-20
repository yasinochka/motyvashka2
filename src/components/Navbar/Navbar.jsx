import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import Logo from '../Logo/Logo'; 

function Navbar() {
  return (
    <div className="navbar">
      <Logo src={assets.logo} className="logo" /> 
      
      <ul className="navbar-menu">
        <li><a href="#welcome">Welcome </a> </li>
        <li><a href="#about">About</a></li>
        <li><a href="#why-me">Why me</a></li>
        <li><a href="#why-ctf">Why CTF</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#qa">Q&A</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
