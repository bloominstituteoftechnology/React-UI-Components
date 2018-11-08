import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent.js';

const HeaderTitle = (props) => {
  return (
    <div>
      <h3>{props.title} <span>@{props.identifer} &middot; {props.date} </span></h3>
      <HeaderContent content={props.content} />
    </div>
    
  );
};

export default HeaderTitle;