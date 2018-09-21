import React from 'react';
import './Header.css';
import HeadTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const Head = () => {
    return (
      <div className="top">
           <ImageThumbnail />
          <HeadTitle />
          <HeaderContent />
      </div>
    );
  };

  export default Head;
  