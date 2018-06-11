import React from 'react';
import './Header.css';

const HeaderContainer = () => {
  return (
    <div className="header">
      <ImageThumbnail />
      <HeaderTitle />
      <HeaderContent />
    </div>
  );
};

export default HeaderContainer;