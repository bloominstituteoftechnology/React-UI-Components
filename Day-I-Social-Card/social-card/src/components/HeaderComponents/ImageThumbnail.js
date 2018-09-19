import React, { Component } from 'react';
import './Header.css';
import logo from './img/lambda.png'; // Tell Webpack this JS file uses this image



class ImageThumbnail extends Component {
  render() {
    return (
      <div className="Image">

      <img src={logo} alt="Logo" />

        </div>

    );
  }
}



export default ImageThumbnail;
