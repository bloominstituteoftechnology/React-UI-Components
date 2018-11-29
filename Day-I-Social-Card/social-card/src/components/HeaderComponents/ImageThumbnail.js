import React from 'react';
import './Header.css';

const ImageThumbnail = props => {
  return (
    <img src={props.url} 
    className='img-thumbnail'
    alt='user avatar'
    />
  );
}

export default ImageThumbnail;