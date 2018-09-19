import React, { Component } from 'react';
import ImageThumbnail from './ImageThumbnail'
import './Header.css';


class HeaderContainer extends Component {
  render() {
    return (
      <div className="Navbar">

          <ImageThumbnail />
        </div>

    );
  }
}



export default HeaderContainer;
