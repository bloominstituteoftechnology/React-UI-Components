import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

function HeaderContainer() {
    return(
        <div className="header">
            <ImageThumbnail />
            <div className="headerContent">
            <HeaderTitle title = "Lambda School" />
            <HeaderContent text="lets tryto learn react by building simple interfaces with components. dont try to overthink it just keep it simple and have fun onvce you feel comfortable using components you are wwell on your way to marstering react!" />
        </div>
        </div>

    );
}

export default HeaderContainer;