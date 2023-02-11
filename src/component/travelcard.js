import React, { Component } from 'react'
import "../index.css"

export default function travelCard(props){
    return(
        <div className='travelCard'>
            <img className='travelCard-img' src={`../images/${props.item.img}`}></img>
                <div className='travelCard-stats'>
                    <img className='travelCard-location-icon' src={process.env.PUBLIC_URL + 'images/location-icon.png'}></img>
                </div>
        </div>
    )
}