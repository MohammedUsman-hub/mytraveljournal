import React from "react"

import Nav from "./component/nav"
import CountryInfo from "./countryinfo"

import data from "./data"


export default function App(){
    const DataJs = data.map(item => {
        return(
            <CountryInfo
                key={item.id}
                item={item}
            />
        )
    })
    return(
        <div>
            <Nav/>
            <section>
                {DataJs}
            </section>
        </div>
        
    )
}