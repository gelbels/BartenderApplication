import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function navbar() {
  return (
    <div className="navbar">
      <div className="navContent">
        <Link to="/">Home</Link>
        <Link to="/menu"> Our Menu</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
       
      </div>
    </div>
  )
}

export default navbar
