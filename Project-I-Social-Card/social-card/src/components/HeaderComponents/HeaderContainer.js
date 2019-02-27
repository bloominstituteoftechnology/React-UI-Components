import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

function HeaderContainer (props) {
    return (
        <header>
            <ImageThumbnail src={props.imageLink} />
            <div className='header-text'>
                <HeaderTitle title={props.title} timestamp={props.timestamp} />
                <HeaderContent text={props.text} />
            </div>
        </header>
    );
} 


export default HeaderContainer;