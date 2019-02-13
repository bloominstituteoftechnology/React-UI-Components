import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return(
        <div className="header-container">
            <div className="img-column">
                <ImageThumbnail />
            </div>
            <div className="header-txt-column">
                <HeaderTitle    />
                <HeaderContent />
            </div>
        </div>
        
    );
}

export default HeaderContainer;