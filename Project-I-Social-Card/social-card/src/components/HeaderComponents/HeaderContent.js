import React from 'react';
import './Header.css';

export default function HeaderContent(props) {
    return (
        <div>
            <p>{props.content}</p>
        </div>
    )
}