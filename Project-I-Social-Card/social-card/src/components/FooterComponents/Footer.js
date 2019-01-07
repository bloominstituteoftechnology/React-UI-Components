import React from 'react';
import './Footer.css';
let value = 5

function heartValue(){
    value ++;
    console.log(value)
    console.log('The link was clicked.');
}

function Footer (){
    return(
        <div className = 'footerIcons'>
            <i className="far fa-comment"></i>
            <i className="fas fa-sync"> 6</i>
            <i className="far fa-heart" onClick={heartValue}> {value}</i>
            <i className="far fa-envelope"></i>
        </div>
    )
}






export default Footer