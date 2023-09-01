import React from 'react';
import {Link} from 'react-router-dom';
import BackgroundImage from '../assets/backgroundImg.jpeg';
import '../styles/home.css';

function home() {
  return (
    <div className="home">
      <div className="homeContent" style={{backgroundImg: 'url($(BackgroundImage))'}}>
        <h1>Shots 'n Pours</h1>
        <p> The best drinks in town.</p>
        <Link to="menu">
        <button>Order now</button>
        </Link>
      </div>
    </div>
  )
}

export default home
