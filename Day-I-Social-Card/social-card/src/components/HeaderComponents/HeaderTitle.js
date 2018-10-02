import React from 'react';
import './Header.css';

const HeaderTitle = props => {
  return (
    <div className="HeaderTitle">
      <h3>{props.displayName}</h3>
      <div className="username">{props.username}</div>
      <div className="timestamp">{props.timestamp}</div>
    </div>
  )
}

export default HeaderTitle;