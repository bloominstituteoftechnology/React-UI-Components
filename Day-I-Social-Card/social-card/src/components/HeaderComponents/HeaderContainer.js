import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = props => {

    return (
        <div className='header-container container'>
            <ImageThumbnail src={'https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg'} />
            <div className='header-info' >
                <HeaderTitle 
                    name={'Lambda School'}
                    username={'LambdaSchool'}
                    timestamp={'26 Jan'}
                />
                <HeaderContent
                    content={'Let\'s learn React by building simple interfaces with components. Don\'t try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to matering React!'}
                />
            </div>
        </div>
    );
}

export default HeaderContainer;