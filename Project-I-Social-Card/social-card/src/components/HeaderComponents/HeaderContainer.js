import React from 'react';
import './Header.css';

import  HeaderContent from './HeaderContent';
import  HeaderTitle from './HeaderTitle';
import  ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
    return (
    <div className="container-header-img">
        <ImageThumbnail />

<div className="container-header-t-c">

    <HeaderTitle />
    <HeaderContent />
</div>

</div> //end div

    
        )

}

export default HeaderContainer;
