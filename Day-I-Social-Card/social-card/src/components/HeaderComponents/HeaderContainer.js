import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
      <div className="header-container">
        <ImageThumbnail />
          <div className="text-container">
            <HeaderTitle />
            <HeaderContent />
          </div>
      </div>
    );
  }

  //Header container to hold header components. ImageThumbnail - https://ibin.co/3whrpKSBbZ81.png
//                                            HeaderTitle Lambda School Header Text, @LambdaSchool handle and timestamp
//                                            HeaderContent - Displays copy provided in the headers content

export default HeaderContainer;