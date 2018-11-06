import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderContent from './HeaderContent.js';

function HeaderContainer(props) {
    return (
      <div >
       <div><ImageThumbnail /></div>
       <div><HeaderContent /></div>

      </div>



    );
}

export default HeaderContainer;
