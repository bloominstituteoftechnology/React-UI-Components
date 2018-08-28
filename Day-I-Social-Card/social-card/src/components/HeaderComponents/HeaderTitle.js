import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return (
    <div class="header-text">
        <ImageThumbnail />
        <h1>Lambda School</h1> <p>@LambdaSchool - 26 jan</p>
    </div>
    );
  };
  
  export default HeaderTitle;