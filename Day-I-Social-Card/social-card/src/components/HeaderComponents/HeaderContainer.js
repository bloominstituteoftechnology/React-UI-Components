import React from 'react';
import './Header.css';
import './ImageThumbnail';
import './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

function HeaderContainer() {
    return (
        <div className="header-container">
            <ImageThumbnail />
            <div className="header-text">
                <HeaderTitle name="Lambda School" handle="@LambdaSchool" date="26 jan" />
                <HeaderContent />
            </div>
        </div>
    );
}

export default HeaderContainer;