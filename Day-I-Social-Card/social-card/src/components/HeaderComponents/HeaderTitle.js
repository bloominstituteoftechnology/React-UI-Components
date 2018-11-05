import React from 'react';
import './Header.css';

function HeaderTitle(props) {

  return (

    <div className="card-header">

      <h3>{props.title}</h3>
      <h4>{`${props.handle} · ${props.timestamp}`}</h4>

    </div>

  );

}

export default HeaderTitle;
