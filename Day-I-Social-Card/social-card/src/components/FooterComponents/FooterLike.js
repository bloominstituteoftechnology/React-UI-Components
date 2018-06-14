import React from 'react';
import './Footer.css';

const FooterLike = () => {
    function handleClick(e){
        e.preventDefault();
        console.log('The link was clicked.');
    }
    return (
        <i className="far fa-heart footer__like" onClick={(e) => this.handleClick(e)}> <span> </span> </i>
    )
}


export default FooterLike;
