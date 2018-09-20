import React from 'react';
import './Header.css';
import ImageThumbnails from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContent= () => {
    return (
       <div className="headerContent">
           <ImageThumbnails className="headerContent--imag"/>
           <HeaderTitle className="headerContent--title"/>
       </div>
     );
  }
export default HeaderContent;
