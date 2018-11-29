import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderText = (props) => {
    return (
      <div className="textContainer">
        <HeaderTitle />
        <HeaderContent />
    </div>
    )
}

export default HeaderText;