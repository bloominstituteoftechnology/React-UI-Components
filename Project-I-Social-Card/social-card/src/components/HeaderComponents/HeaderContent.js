import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle';

const HeaderContent = () => {
    return (
      <div className="HeaderContent">
        <HeaderTitle />
        <p>HeaderText</p>
      </div>
    );
  };

export default HeaderContent; 