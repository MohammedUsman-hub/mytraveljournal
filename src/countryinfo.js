import React from 'react'
import "./index.css"

export default function CountryInfo(props){
    return(
        <div>
            <img className='' src={"./images/${props.item.img}"}></img>
            <div>
                <img className='' src='./images/location-icon.png'></img>
                <span>{span.country}</span>
                <span>{props.location}</span>
                <h4>{props.date}</h4>
                <h4>{props.description}</h4>
            </div>
        </div>
    )
}