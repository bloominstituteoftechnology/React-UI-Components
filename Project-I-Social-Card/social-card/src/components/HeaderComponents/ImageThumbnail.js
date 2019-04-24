import React from 'react';
import './Header.css';

export default function Thumbnail({src, alt}) {
    return (
        <div className="thumbnail-container">
            <img className="thumbnail" src={src} alt={alt} />
        </div>
    )
}