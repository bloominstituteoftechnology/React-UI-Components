import React from 'react';
import './Header.css';

export default function HeaderTitle(props) {
    return (
        <div>
            <h1>{props.title || "Lambda School"}</h1>
            <span>{props.subtitle || "@Lambda Shchool"}</span> 
            <span>{props.date || "Jan 26"}</span>
        </div>
    )
}