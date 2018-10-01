import React from 'react';
import './Header.css';

const HeaderBody = props => {
  return (
    <div className="HeaderBody">
      <p>{props.body}</p>
    </div>
  )
}

export default HeaderBody;