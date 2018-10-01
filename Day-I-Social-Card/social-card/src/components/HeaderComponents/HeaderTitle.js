import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail'

const HeaderTitle = () => {
    return (
        <div className="headertitle">
             <ImageThumbnail/>
             <h1 className="username">Lambda School</h1>
             <span className="handle">@LambdaSchool</span>
             <li className="date">26 jan</li>
        </div>
    )
};

export default HeaderTitle;