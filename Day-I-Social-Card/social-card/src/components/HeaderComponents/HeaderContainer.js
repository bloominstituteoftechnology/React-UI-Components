import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

function HeaderContainer() {
    return (
        <header>
            <ImageThumbnail source="https://ibin.co/3whrpKSBbZ81.png" />
            <div>
                <HeaderTitle user='Lambda School' handle='@LambdaSchool' time='26 jan'/>
                <HeaderContent />
            </div>
        </header>
    );    
}

export default HeaderContainer;