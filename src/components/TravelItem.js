import React from 'react'

function TravelItem({ image, name, price ,duration}) {
  return (
    <div className='travelItem'>
        <div style={{ backgroundImage: `url(${image})` }}> </div>
    <h1> {name} </h1>
    <p> RS{price} </p>
    <p>{duration}</p>
    </div>
  )
}

export default TravelItem
