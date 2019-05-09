
import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import './Header.css';



const HeaderContainer = () => {
    return (
      <div className="Header">
        <div className='ImageThumbnail'>
          <ImageThumbnail />
        </div>
        <div className='box1'>
          <div className='HeaderTitle'>
           <HeaderTitle />
          </div>
          <div className='HeaderContent'>
           <HeaderContent />
           </div>
        </div>

      </div>
      );
  };
  
  export default HeaderContainer;
  