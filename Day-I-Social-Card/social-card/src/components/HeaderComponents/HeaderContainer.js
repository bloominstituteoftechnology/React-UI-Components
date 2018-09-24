import React from 'react';
import './Header.css';
import ImageThumbnail from '../HeaderComponents/ImageThumbnail';
import HeaderTitle from '../HeaderComponents/HeaderTitle';
import HeaderContent from '../HeaderComponents/HeaderContent';

const HeaderContainer = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className = {props.className}>
                <ImageThumbnail 
                    className = "title"
                    imgClass = "logo"
                    uri="https://ibin.co/3whrpKSBbZ81.png" />
                <HeaderTitle  
                    headDivClass = "headers"
                    headClass = "heading"
                    handleClass = "handle"
                    headerText = "Lambda School"
                    handleText = "@lambdaschool"
                    dateText = "26-jan" />
            </div>
            <HeaderContent 
                className="heading" 
                text="Hello" />
        </div>
    );
}

export default HeaderContainer;