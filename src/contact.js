import React from 'react'
import "./index.css"

export default function Contact(props){
    return(
        <div className='contacts'>
            <div className='contact-card'>
                
                <img src={props.img}></img>
                <h3>{props.location}</h3>

                <div className='country-location'>
                    <img src={props.imgIcon}></img>
                    <h3>{props.country}</h3>
                    <a>{props.googlemaps}</a>
                </div>

                <div>
                    <h5>{props.date}</h5>
                    <h5>{props.description}</h5>
                </div>
                
            </div>
        </div>
    )
}