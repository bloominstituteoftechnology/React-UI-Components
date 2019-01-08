import React from 'react';
import './Header.css';

const ImageThumbnail = props => {
  return(
    <img className='image-thumb' src={props.imgSrc}></img>
  )
}

export default ImageThumbnail;