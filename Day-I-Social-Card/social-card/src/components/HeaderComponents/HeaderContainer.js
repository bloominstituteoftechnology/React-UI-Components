import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = (props) => {
    return (
        <div>
            <ImageThumbnail />
            <HeaderTitle name="Lambda School" handle="LambdaSchool" date="26 jan"/>
        </div>
    );
}

export default HeaderContainer;
