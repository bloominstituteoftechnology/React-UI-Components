import React from 'react';
import HeaderTitle  from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import './Header.css';

const HeaderContainer = ()=> {
        return(
         <div className= 'headerContainer'>
         <div className='lambda-img'>
         <ImageThumbnail />
         </div>
         
         
         
         <div className = 'right-side'>
             <div className ='account-info'>
             <HeaderTitle />
             </div>
             
             <div className ='content'>
             <HeaderContent />
             </div>
        </div>
         
         </div>
        );
         
        
};

    


export default HeaderContainer;