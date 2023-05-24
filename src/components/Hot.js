import React from 'react'
import "../styles/Hot.css";
import Popular from "../assets/popular.jpg";
import Adv from "../assets/adv.jpg";
import Honey from "../assets/honey.jpg";
function Hot() {
  return (
    <div className='hotPackages'>
        <h1 className='hoth'>Check out our Hottest Packages</h1>
        <div className='packageTypes'>
        <div className='family package'>
        <div className='packImg' style={{ backgroundImage: `url(${Popular})` }}></div>
            <span><h2>Family Package</h2></span>
        </div>
        <div className='family package'>
        <div className='packImg' style={{ backgroundImage: `url(${Adv})` }}></div>
            <span><h2>Honeymoon Package</h2></span>
        </div>
        <div className='family package'>
        <div className='packImg' style={{ backgroundImage: `url(${Honey})` }}></div>
            <span><h2>Adventure Package</h2></span>
        </div>
        </div>
        
    </div>
  )
}

export default Hot