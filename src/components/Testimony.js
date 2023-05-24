import React from 'react'
import profile from "../assets/profile.jpg";
import "../styles/Testimony.css";
function Testimony() {
  return (
    <div className='testimony'> 
    <h1>Our Happy Customers</h1>
    <div className='testicont'>
    <div className='test1'>
        <div className='imagecont' style={{backgroundImage:`url(${profile})`}}></div>
        <div className='textcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
         <hr></hr>
         <h1>Alfred</h1>
    </div>
    <div className='test2'>
    <div className='imagecont' style={{backgroundImage:`url(${profile})`}}></div>
        <div className='textcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <hr></hr>
         <h1>Alfred</h1>      
    </div>
    <div className='test3'>
    <div className='imagecont' style={{backgroundImage:`url(${profile})`}}></div>
        <div className='textcont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <hr></hr>
         <h1>Alfred</h1>
    </div>
    </div>
    
    
    </div>
  )
}

export default Testimony