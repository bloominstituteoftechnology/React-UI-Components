import React from 'react';
import './Header.sass';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = props => {
    let user = {
        avatarUrl: './assets/avatar.jpg',
        name: 'Lambda School',
        profile: '#',
        handle: '@LambdaSchool'
    };
    let post = {
        summary:
            "Let's learn React by building simple interfaces with components. Don't try to overthink it. Just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!"
    };
    return (
        <div className="header-container">
            <ImageThumbnail user={user} />
            <HeaderTitle user={user} />
            <HeaderContent content={post.summary} />
        </div>
    );
};

export default HeaderContainer;
