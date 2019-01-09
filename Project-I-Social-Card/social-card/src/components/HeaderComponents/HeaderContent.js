import React from 'react';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import './Header.css';

const HeaderContent = () =>{
    return (
        <div className="flex header-content">
            <ImageThumbnail/> 
            <div className="flex flex-col">
                <HeaderTitle/> 
                <p className="header-p w-100">Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>   
            </div>
            
            
        </div>
    )
}

export default HeaderContent;