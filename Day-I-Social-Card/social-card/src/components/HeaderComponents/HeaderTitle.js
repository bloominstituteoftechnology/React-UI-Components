import React from 'react';
import './Header.css';

function HeaderTitle(props) {
  return (
    <React.Fragment>
      <h1 className="header">{props.user}</h1>
      <h2 className="username">{props.handle + ' \u00B7 ' + props.time}</h2>
    </React.Fragment>
  );
}

export default HeaderTitle;