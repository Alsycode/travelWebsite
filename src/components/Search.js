import React from 'react'
import pasport from "../assets/pasport.jpg";
import "../styles/Search.css";
function Search() {
  return (
    <div className='search' style={{backgroundImage:`url(${pasport})`}}>
     <div className='Form'><form>
       <div><label htmlFor="name">Enter the Destination</label>
        <input name="name" type='text' placeholder='Bali'></input></div> 
        <div><label>Enter date</label>
        <input type='text' placeholder='July 14'></input></div>
        <div><label>Budget</label>
        <input type='text' placeholder='Rs 5000'></input></div>
       
     </form>
     <div><button className='book'>BOOK</button></div> 
     </div>
   
     
    </div>

  )
}

export default Search