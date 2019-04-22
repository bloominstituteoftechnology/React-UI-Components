import React from 'react';
import './Header.css';

import thumbnail from '../../images/lambdacrest.png';

function ImageThumbnail() {
  return (
    <div className="ImageThumbnail">
      <img src={thumbnail} alt="" />
    </div>
  );
}

export default ImageThumbnail;
