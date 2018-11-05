import React, { Fragment } from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = props => {
    let user = {
        avatarUrl: 'https://ibin.co/3whrpKSBbZ81.png',
        name: 'Lambda School',
        profile: '#'
    };
    return (
        <Fragment>
            <ImageThumbnail user={user} />
            <HeaderTitle user={user} />
            <HeaderContent />
        </Fragment>
    );
};

export default HeaderContainer;
