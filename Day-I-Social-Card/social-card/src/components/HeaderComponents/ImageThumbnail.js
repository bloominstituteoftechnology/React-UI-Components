import React from 'react';
import './Header.css';

const ImageThumbnail = props => {
  return (
    <picture className="ImageThumbnail">
      <img src={props.source} alt={props.alt}/>
    </picture>
  )
}

export default ImageThumbnail;