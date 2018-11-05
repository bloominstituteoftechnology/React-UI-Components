import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';

function HeaderContainer() {
    return (
        <React.Fragment>

        <header>
            <ImageThumbnail src="https://ibin.co/3whrpKSBbZ81.png" alt='logo' />
            <HeaderTitle title='Lambda School' handle='@LambdaSchool' />
        </header>

        <HeaderContent content="Let's learn React by building simple interfaces with components.  Don't try to overthing it, just keep it simple and have fun.  Once you feel comfortable using components you are well on your way to mastering React!" />
        
        </React.Fragment>
    );
}

export default HeaderContainer;