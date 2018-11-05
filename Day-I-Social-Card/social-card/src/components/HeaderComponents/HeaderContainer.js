import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

function HeaderContainer() {
    return (
        <div className='headerContainer'>
            <ImageThumbnail source='https://ibin.co/3whrpKSBbZ81.png' alt='Lambda Thumbnail'/>
            <div className='header-content'>
                <HeaderTitle title='Lambda School' userName='@LambdaSchool' date='26 Jan' />
                <HeaderContent 
                    text="Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!" 
                />
            </div>
        </div>
    )
}

export default HeaderContainer;
