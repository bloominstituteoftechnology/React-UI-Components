import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return (
      <div className="headerContainer">
        <div className="headerTitle">
          Lambda School
         
          <HeaderContent />
        </div>
      </div>
    );
  };
  
  export default HeaderTitle;