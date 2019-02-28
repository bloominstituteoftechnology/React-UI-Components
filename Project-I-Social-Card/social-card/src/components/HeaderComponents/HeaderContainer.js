import React from 'react';
import ImageThumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'
import './Header.css';

const HeaderContainer = props => (
    <div className='header-container'>
        <ImageThumbnail thumbnail={props.header.thumbnail}/>
        <HeaderTitle title={props.header.title}/>
        <HeaderContent content={props.header.content}/>
    </div>
)

export default HeaderContainer