import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderText from './HeaderText'

const HeaderContainer = (props) => {
    return (
        <div className="headerParent">
          <ImageThumbnail />
          <HeaderText />
        </div>
    )
}

export default HeaderContainer;

