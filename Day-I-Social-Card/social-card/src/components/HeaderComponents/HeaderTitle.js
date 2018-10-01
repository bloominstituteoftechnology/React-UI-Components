import React from 'react';
import './Header.css';

const HeaderTitle = props => {
  return (
      <div>
        <span className = 'displayName'>Lambda School</span>
        <span className = 'username'>@LambdaSchool</span>
        <span className = 'date'> · 1 Oct</span>
      </div>
  );
}

export default HeaderTitle;
