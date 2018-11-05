import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import image from './img/lambda-logo.png'

function HeaderContainer() {
    return (
        <React.Fragment>
            <ImageThumbnail src={image} alt='Lambda Logo' />
            <HeaderTitle 
                name='Lambda School' 
                username='@LambdaSchool' 
                date='26 jan' 
            />
            <HeaderContent content = "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!" />
        </React.Fragment>
    );
}

export default HeaderContainer;