import React from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const FooterButton = props => {
    return (
        <div className='button'>
            <FontAwesomeIcon icon={props.symbol} flip="horizontal" />
            <span className='number'></span>
        </div>
    );
}

export default FooterButton


