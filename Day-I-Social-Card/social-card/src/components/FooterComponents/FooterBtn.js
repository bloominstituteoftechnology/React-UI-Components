import React from 'react';
import './Footer.css';

const FooterBtn = (props) => {
    return (
        <a href = "#" className = "footer-link">
        <i className={props.iconClass}>&nbsp;&nbsp;{props.number}</i>
        </a>
    );
}

export default FooterBtn;