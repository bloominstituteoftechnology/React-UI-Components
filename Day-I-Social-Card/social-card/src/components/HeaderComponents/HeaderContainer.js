import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const lambdaSchool = require('../../DB/lambdaSchool');

const HeaderContainer = (props) => {
    return (
        <section className='header-well'>
            <ImageThumbnail {...lambdaSchool}/>
            <HeaderContent {...lambdaSchool}/>
        </section>
    );
}

export default HeaderContainer;