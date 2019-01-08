import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

import './Header.css';

const HeaderContainer = () => {
    return (
       <section className='headerContainer'>
           <div className='headerContainer--logo'>
               <ImageThumbnail/>
           </div>
           <div>
               <HeaderTitle />
               <HeaderContent />
           </div>
       </section>
    )
}

export default HeaderContainer;