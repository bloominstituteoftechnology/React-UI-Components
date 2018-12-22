import React from 'react';
import './Header.css';
import ImgThumb from './ImageThumbnail';
import HeadContent from './HeaderContent';
import HeadTitle from './HeaderTitle';

const HeaderContainer = (props) => {
    return (
        <div className="container">
            <div className="logo">
                <ImgThumb />
            </div>
            <div>
                <div className="headTitle">
                    <HeadTitle />
                </div>
                <div className="headContent">
                    <HeadContent />
                </div>
            </div>
        </div>
    )
}

export default HeaderContainer;