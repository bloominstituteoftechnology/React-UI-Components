import React from 'react';
import './Header.css';
import Logo from './img/LambLogo.png'

const ImageThumbnail = (props) => {
  return (
    <img className='imageThumbnail' src={Logo} alt=''></img>
  )
}

export default ImageThumbnail;