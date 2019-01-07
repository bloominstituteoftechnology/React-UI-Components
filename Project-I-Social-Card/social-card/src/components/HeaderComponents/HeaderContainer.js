import React from 'react';
import {HeaderTitle}  from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import './Header.css';

const HeaderContainer = ()=> {
        return(
         <div className= 'headerContainer'>
         <div className='lambda-img'>
         <ImageThumbnail />
         </div>
         
         
         
         <div className = 'title'>
             <HeaderTitle />
        </div>
         
         </div>
        );
         
        
};

    


export default HeaderContainer;