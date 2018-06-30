import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContent= () => {
return (    
<div className="header-content">
    <ImageThumbnail />
    <div class="header-text">
        <HeaderTitle />
        <p>Let's learn React by building simple interfaces with componenets. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
    </div>
</div>
);
};
export default HeaderContent;
