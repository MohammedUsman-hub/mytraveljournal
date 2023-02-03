import React from 'react'
import "./index.css"

export default function CountryInfo(props){
    return(
        <div className='countryInfo'>
            <img className='' src={"./images/${props.item.img}"}></img>
            <div>
                <img className='county-img' src={"./images/${props.item.imgIcon}"}></img>
                <span>{props.country}</span>
                <span>{props.location}</span>
                <span>{props.date}</span>
                <span>{props.description}</span>
                <span>{props.googlemaps}</span>
            </div>
        </div>
    )
}