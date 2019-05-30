import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

function HeaderContainer (){
   return(
<header className ='header'>
<ImageThumbnail />
<HeaderContent />
</header>
   );
}

export default HeaderContainer;