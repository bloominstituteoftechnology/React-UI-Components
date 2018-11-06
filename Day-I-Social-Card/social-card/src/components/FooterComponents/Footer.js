import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






const Footer = props => {
    return (
        <div className='footer'>
            <div className='button'>
                <FontAwesomeIcon icon="comment" flip="horizontal" />
            </div>
            
            <div className='button'>
                <FontAwesomeIcon icon="sync" />
                <span className='number'>{props.int}</span>
            </div>
            
            <div className='button'>
                <FontAwesomeIcon icon="heart" />
                <span className='number'>{props.num}</span>
            </div>
            
            <div className='button'>
                <FontAwesomeIcon icon="envelope" />
            </div>
        </div>
    );
}

export default Footer;


// font="fa fa-envelope-o" 
// font="fa fa-heart-o" number='4' 
// font="fa fa-retweet" number='6'
// font="fa fa-sync"