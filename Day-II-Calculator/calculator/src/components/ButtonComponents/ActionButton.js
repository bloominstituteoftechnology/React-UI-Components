import React from 'react';

ActionButton = props => {
  return <button className={`big-button ${props.type}`}>{props.value}</button>;
};
