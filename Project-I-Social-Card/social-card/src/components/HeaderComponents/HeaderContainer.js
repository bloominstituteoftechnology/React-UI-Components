import React from 'react';
import ImageThumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'
import './Header.css';

const HeaderContainer = props => (
    <div className='header-container'>
        <ImageThumbnail thumbnail={props.header.thumbnail}/>
        <div className='header-text'>
            <HeaderTitle title={props.header.title}/>
            <HeaderContent content={props.header.content}/>
        </div>
    </div>
)

export default HeaderContainer