import React from 'react';
import './Header.css';

const ImageThumbnail = (props) => {
  return <img src ={props.logo} alt={props.altText}/>
}; 

export default ImageThumbnail;