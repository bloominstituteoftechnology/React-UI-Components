import React from 'react';
import './Header.css';

export default function Thumbnail({src, alt}) {
    return <img src={src} alt={alt} />
}