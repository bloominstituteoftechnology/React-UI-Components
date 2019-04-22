import React from 'react';
import './Header.css';

export default function HeaderContent(props) {
    return ( 
        <div className="header-content">
            <p>{props.content}</p>
        </div>
    )
}