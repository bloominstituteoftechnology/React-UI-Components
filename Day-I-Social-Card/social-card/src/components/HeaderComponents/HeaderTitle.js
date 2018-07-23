import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return ( 
      <div className="title-wrapper">
        <h3>Lambda School </h3>
        <HeaderContent />
      </div>
    );
};

export default HeaderTitle;