import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle';

const HeaderContent = () => {
    return (
      <div className="headerContent">
      <div>
          <HeaderTitle />
          </div>
          <div>
        <p>Let's Learn React by building simple interfaces with components.</p>
        </div>
      </div>
    );
  };

  export default HeaderContent;


// Header copy