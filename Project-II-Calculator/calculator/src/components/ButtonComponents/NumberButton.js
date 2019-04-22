import React from 'react';
import './Button.css';


export default function NumberButton({content, large}) {
    return (
        (large)
            ? <div className="btn large">{content}</div> 
            : <div className="btn">{content}</div>
    )
}