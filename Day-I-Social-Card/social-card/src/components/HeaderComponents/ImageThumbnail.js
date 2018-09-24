import React from 'react';
import './Header.css';
class ImageThumbnail extends React.Component {
  render() {
    return (
      <div>
      <div className="imageThumbnail">
        <img className="banner-img" src="https://ibin.co/3whrpKSBbZ81.png"  alt="LambdaShield"  />
      </div>
      </div>
      )
  }
}

export default ImageThumbnail;

/*
class CardBanner extends React.Component {
  render() {
    return (
    <div className="container-banner">
      <h1>CardBanner stuff</h1>
      <img className="banner-img" src="https://ibin.co/3wnC6SgIOJud.png"  alt="LambdaShield" height="20" width="20" />
    </div>
    )
  }
  }
*/