import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div className="headerTitle">
    <p><strong>Lambda School</strong></p>
    <div className="handle">
    <p>@Lambdaschool</p>
    </div>
    <div className="period">
    <p>.</p>
    </div>
    <div className="date">
    <p>26 Jan</p>
    </div>
    </div>
  );
}

export default HeaderTitle;
