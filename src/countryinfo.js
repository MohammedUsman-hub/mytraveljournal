import React from 'react'
import "./index.css"

export default function CountryInfo(props){
    return(
        <div>
            <img className='' src={"./images/${props.item.img}"}></img>
            <div>
                <img className='' src={"./images/${props.item.imgIcon}"}></img>
                <h4>{props.country}</h4>
                <h4>{props.location}</h4>
                <h4>{props.date}</h4>
                <h4>{props.description}</h4>
                <h4>{props.googlemaps}</h4>
            </div>
        </div>
    )
}