import React from 'react';
import './Header.css';

export default function HeaderTitle(props) {
    return (
        <div className="header-title">
            <h1>{props.title || "Lambda School"}</h1>
            <span>{props.subtitle || "@Lambda School"}</span> 
            <span>{props.date || "Jan 26"}</span>
        </div>
    )
}