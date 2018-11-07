import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

function HeaderContainer(props) {
    return (
      <div ClassName="headerContainerFlexing">
       <div><ImageThumbnail /></div>
       <div><HeaderContent /></div>

      </div>



    );
}

export default HeaderContainer;
