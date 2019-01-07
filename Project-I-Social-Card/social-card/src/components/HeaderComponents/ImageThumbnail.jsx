import React from 'react';
import './Header.css';

import logo from './lambda-logo.jpg';

const ImageThumbnail = () => {
  return (
    <div>
      <img src={logo} alt="Lambda School Logo" />
    </div>
  )
}


export default ImageThumbnail;