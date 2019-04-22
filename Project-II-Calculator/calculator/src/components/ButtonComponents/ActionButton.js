import React from 'react';
import './Button.css';


export default function ActionButton({content, large}) {
    return (
        (large)
            ? <div className="btn action large">{content}</div> 
            : <div className="btn action">{content}</div>
    )
}