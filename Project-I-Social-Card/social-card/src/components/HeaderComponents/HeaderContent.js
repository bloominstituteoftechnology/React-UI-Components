import React from 'react';
import './Header.css';

 const HeaderContent = ({ headerContent }) => {
  return (
    <div className="headerContent">
      <p>{headerContent}</p>
    </div>
  );
};

 export default HeaderContent;