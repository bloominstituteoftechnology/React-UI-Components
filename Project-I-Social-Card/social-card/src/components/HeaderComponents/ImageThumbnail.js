import React from 'react';
import './Header.css';


const ImageThumbnail = props => {
  return (
    <img className="header-image" src={props.imageSource} alt="Lambda Logo" />
  );
}


export default ImageThumbnail;