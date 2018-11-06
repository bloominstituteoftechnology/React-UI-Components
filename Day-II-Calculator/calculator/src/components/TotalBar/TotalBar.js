import React from 'react';
import './TotalBar.css';

const TotalBar = (props) => {
  return (
    <div className="TotalBar">
      <h1 className="DisplayTotalNum">{props.total}</h1>
    </div>
  );
};

export default TotalBar;
