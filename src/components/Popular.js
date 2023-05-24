
import React from 'react'
import {TravelList} from "../helpers/TravelList"
import TravelItem from"../components/TravelItem";
import "../styles/Popular.css";

import back from "../assets/back.jpg";
export default function Popular() {
    return (
        <div className="popular" style={{backgroundImage:`url(${back})`}}>
          <h1 className="popularTitle">Popular Travel Destinations</h1>
          <div className="travelList">
            {TravelList.map((travelItem, key) => {
              return (
                <div>
                <TravelItem key={key}
                 image={travelItem.image}
                name={travelItem.name}
                price={travelItem.price} 
                duration={travelItem.duration}/>
                  
                    
                </div>
                
              );
            })}
          </div>
        </div>
      );
    }
    
   