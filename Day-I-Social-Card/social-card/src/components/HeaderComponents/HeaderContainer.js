import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

export default class HeaderContainer extends React.Component {
    render(){
        return (
            <div className="header-container">
                <ImageThumbnail />
                <div className="header-text-content">
                    <HeaderTitle />
                    <HeaderContent />
                </div>
            </div>
        )
    }
}
