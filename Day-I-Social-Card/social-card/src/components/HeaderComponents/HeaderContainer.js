import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


const HeaderContainer = ()=> {
  return ( 
    <div class='container'>
    <div class='topdiv'>
        <ImageThumbnail />
        <HeaderTitle />
    </div>
    <div class='contentdiv'> 
       <HeaderContent />
    </div>
    </div>
);
};

export default HeaderContainer;