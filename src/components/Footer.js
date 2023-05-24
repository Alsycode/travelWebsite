import React from 'react'
import "../styles/Footer.css";
import Copy from "../assets/copy.avif";
function Footer() {
  return (
    <div className='footer'>
        <div className='logo'>
            <img className="logoimg insta" src='insta.jpeg' alt="insta"></img>
            <img className="logoimg" src='twitter.jpg' alt="insta"></img>
            <h3><span style={{backgroundImage:`url(${Copy})`}}></span>2023.All rights reserved.</h3> 
        </div>
       
    </div>
  )
}

export default Footer