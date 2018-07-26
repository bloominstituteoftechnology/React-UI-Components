import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


const HeaderContainer = () => 
<div class="headerContainer">
    <div><ImageThumbnail /></div>
    <div><HeaderTitle /><br /><HeaderContent /></div>
</div>;

export default HeaderContainer;