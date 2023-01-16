import React, { Component } from 'react'
import EarthIcon from "../images/earth.png"
import "../index.css"

export default class Nav extends Component{
    render(){
        return(
            <nav className='nav-bar'>
                <img id="earth-icon" src={EarthIcon}></img>
                <h1 className='nav-h1'>My Travel Journal</h1>
            </nav>
        )
    }
}