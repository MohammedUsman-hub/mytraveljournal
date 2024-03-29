import React from 'react'
import "./index.css"

export default function CountryInfo(props){
    return(
        <div className='countryInfo'>
            <img className='country-img' src={`./images/${props.item.img}`}></img>
            <div className='country-stats'>
                <img className='location-img' src={`./images/${props.item.imgIcon}`}></img>
                <span className='country-name'><b>{props.item.country}</b></span>
                <span className='location-name'><b>{props.item.location}</b></span>
                <span className='date-card'><b>{props.item.date}</b></span>
                <span className='desc-card'><b>{props.item.description}</b></span>
            </div>
            <p className='googlemaps'><b><u>{props.item.googlemaps}</u></b></p>
        </div>
    )
}