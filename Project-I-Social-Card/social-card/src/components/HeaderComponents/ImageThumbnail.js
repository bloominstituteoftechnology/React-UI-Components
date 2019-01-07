import React from 'react';
import './Header.css';


const ImageThumbnail = props => {
  return (
    <img src={props.imageSource} alt="Lambda Logo" />
  );
}


export default ImageThumbnail;