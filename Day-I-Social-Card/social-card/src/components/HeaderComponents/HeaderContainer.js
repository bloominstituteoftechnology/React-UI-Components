import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js';
import ImageThumbnail from './ImageThumbnail.js'
import HeaderContent from './HeaderContent.js'

const HeaderContainer = () => {
	    return (<div className='header-container'>
           <ImageThumbnail />
           <div className='header-text'>
              <HeaderTitle />
              <HeaderContent />
           </div>
         </div>);  
    
}

export default HeaderContainer;
