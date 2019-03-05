import React from 'react';
import './Header.css';

const FooterItem = props => (
    <div className='footer-item'>
        <img src='{props.src}' />
        <p>{props.num}</p> 
    </div>
)

export default FooterItem