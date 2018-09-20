import React from 'react';
import ReactDOM from 'react-dom';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
const HeaderContainer =()=>{
    return(
        <div>
            <h1>{ImageThumbnail}</h1>
            <h1>{HeaderTitle}</h1>
            <h1>{HeaderContent}</h1>
        </div>
    );
}

export default HeaderContainer;
