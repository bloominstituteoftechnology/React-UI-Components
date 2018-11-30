import React from 'react';
import './Header.css';
import thumbnail from '../../img/thumbnail-lambda.jpg';

const ImageThumbnail = props => {
  return (
    <img className = {props.className} src={thumbnail} alt="lambda logo" />
  );
}

export default ImageThumbnail;
