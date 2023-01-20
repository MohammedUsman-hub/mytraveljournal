import React, { Component } from 'react'
import "../index.css"

export default class Nav extends Component{
    render(){
        return(
            <nav className='nav-bar'>
                <img id="earth-icon" src="./images/earth.png"></img>
                <h1 className='nav-h1'>My Travel Journal</h1>
            </nav>
        )
    }
}