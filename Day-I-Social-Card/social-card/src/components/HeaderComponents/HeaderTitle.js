import React from 'react';
import './Header.css';

const HeaderTitle = props => {
  return (
    <div>
    <h2>{props.name}</h2>
    <h3>@{props.name}</h3>
    <date>{props.date}</date>
    </div>
  );
}

export default HeaderTitle;
