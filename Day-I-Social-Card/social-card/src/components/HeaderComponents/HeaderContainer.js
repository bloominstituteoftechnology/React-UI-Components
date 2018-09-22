import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = (props) => {
    return (
        <section className='header-well'>
            <ImageThumbnail {...props}/>
            <HeaderContent {...props}/>
        </section>
    );
}

export default HeaderContainer;