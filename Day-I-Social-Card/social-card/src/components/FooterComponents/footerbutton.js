import React from 'react';
import './Footer.css'; 
import 'font-awesome/css/font-awesome.css';

const FooterButton = props => {
    return (
        <div className='button'>
            <i className={props.font} aria-hidden="true"></i>
            <span className='number'>{props.number}</span>
        </div>
    );
}

export default FooterButton;