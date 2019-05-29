import React from 'react';
import './Header.css';

function HeaderContainer() {
    return <div className="header"> 
                <ImageThumbnail />
                <div className="headermain">
                    <HeaderTitle />
                    <HeaderContent />
                </div>
            </div>
}

export default HeaderContainer;