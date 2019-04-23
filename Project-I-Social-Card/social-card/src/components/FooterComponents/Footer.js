import React from 'react'
import './Footer.css'

const Footer = props =>{

    return (

        <p className = "container padding-left border-box">
        <i class="far fa-comment grey margin-right flex"></i>
        <i class="fas fa-sync-alt grey margin-right flex"><p className="tiny-padding">6</p></i>
        <i class="far fa-heart grey margin-right flex"><p className="tiny-padding">4</p></i>
        <i class="far fa-envelope grey margin-right"></i>

        </p>
    )
}

export default Footer