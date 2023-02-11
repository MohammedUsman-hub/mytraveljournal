import React from 'react'
import "./index.css"

export default function CountryInfo(props){
    return(
        <div className='countryInfo'>
            <img className='county-img' src={`./images/${props.item.img}`}></img>
            <div className='country-stats'>
                <img className='county-img' src={`./images/${props.item.imgIcon}`}></img>
                <span>{props.item.country}</span>
                <span>{props.item.location}</span>
                <span>{props.item.date}</span>
                <span>{props.item.description}</span>
            </div>
            <p>{props.item.googlemaps}</p>
        </div>
    )
}