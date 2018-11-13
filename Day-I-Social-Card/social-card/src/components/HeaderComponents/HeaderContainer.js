import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

function HeaderContainer() {
  return (
    <React.Fragment>
      <div className="container">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </React.Fragment>
  )
}

export default HeaderContainer;
