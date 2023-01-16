import React from 'react'
import "./index.css"

export default function Contact(props){
    return(
        <div className='contacts'>
            <div className='contact-card'>
                <img src={props.img}></img>
                <h3>{props.country}</h3>
            </div>
        </div>
    )
}