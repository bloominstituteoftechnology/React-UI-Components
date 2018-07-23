import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


const HeaderContainer = () => 
<div>
    <ImageThumbnail /><HeaderTitle /><br /><HeaderContent />
</div>;

export default HeaderContainer;