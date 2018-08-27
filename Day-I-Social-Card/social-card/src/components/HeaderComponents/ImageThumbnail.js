import React from 'react';
import './Header.css';

const ImageThumbnail = (props) => {
  return (
    <img src={props.thumbnail} className='image-thumbnail' />
  );
}

export default ImageThumbnail;