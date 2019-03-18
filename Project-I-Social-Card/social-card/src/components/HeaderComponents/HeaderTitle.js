import React from 'react';
import './Header.css';

const time = moment();

const HeaderTitle = () => {
  return (
    <div>
        Lambda School
        <span className="time-stamp">{time.format('MMM Do ')}</span>
        <HeaderContent />
    </div>
    );
};

export default HeaderTitle;