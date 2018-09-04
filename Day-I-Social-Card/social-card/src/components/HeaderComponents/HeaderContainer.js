import React from 'react';
import './Header.css';
import './HeaderContent';
import './HeaderTitle';
import './ImageThumbnail';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


const HeaderContainer = () => (<div className='header-container'>
<ImageThumbnail/>
 <div className='header-content-text'>
 <HeaderTitle/>
 <HeaderContent/>
 </div>   

</div>);


export default HeaderContainer;
