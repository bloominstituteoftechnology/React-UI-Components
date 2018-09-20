import React, { Component } from 'react';
import ImageThumbnail from './ImageThumbnail'
import HeaderContent from './HeaderContent'
import HeaderTitle from './HeaderTitle'
import './Header.css';


class HeaderContainer extends Component {
  render() {
    return (
      <div className="Header">

          <ImageThumbnail />
            <HeaderTitle />
          <HeaderContent />

        </div>

    );
  }
}



export default HeaderContainer;
