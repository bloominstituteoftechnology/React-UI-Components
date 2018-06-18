import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js'
import HeaderTitle from './HeaderTitle.js'


const HeaderContent = () => {
    return <div className='content row'>
    <ImageThumbnail />
    <HeaderTitle />
    <p className='row head-content'>Let's learn React by building sipoe interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
    </div>

}

export default HeaderContent;