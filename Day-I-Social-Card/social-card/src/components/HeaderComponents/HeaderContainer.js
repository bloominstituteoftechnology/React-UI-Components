import React from 'react';
import ImageThumbNail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';


const HeaderContainer = () =>{
    return(
        <div className="header-container">
            <div className="image-column">
                <ImageThumbNail src={"https://ibin.co/3whrpKSBbZ81.png"}/>
            </div>
            <div className="header-content-column">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    );
}

export default HeaderContainer;