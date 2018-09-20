import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
const HeaderContainer = (props) => {
    return(
        <div className="headerContainer">
            <ImageThumbnail exampleprop={'example'}/> 
            <div className="titleContainer"><HeaderTitle /><HeaderContent /></div>
            
        </div>
    )
}

export default HeaderContainer