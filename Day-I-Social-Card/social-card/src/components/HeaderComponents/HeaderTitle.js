import React from 'react';
import './Header.css';
import './ImageThumbnail';
import ImageThumbnail from './ImageThumbnail';


const HeaderTitle = () => {
    return (
        <div className='headerTitleContainer'>
            <ImageThumbnail/>
            <h1 className='headerMainTitle'>Lambda School</h1>
            <p className='socialName'>@Lambda School</p>
            <p className='date'>•26 Jan</p>
        </div>
    );
};

export default HeaderTitle;