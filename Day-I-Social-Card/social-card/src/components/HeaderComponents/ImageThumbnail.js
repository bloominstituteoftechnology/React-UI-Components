import React from 'react';
import './Header.css';
import lambdaLogo from './lambdaLogo.jpg'

const HeaderThumbnail = () => {
    return(
        <div className = "lambda-logo-cont">
            <img  className = "lambda-logo" src = {lambdaLogo} alt = "lambda logo"/>
        </div>
    );
}

export default HeaderThumbnail;