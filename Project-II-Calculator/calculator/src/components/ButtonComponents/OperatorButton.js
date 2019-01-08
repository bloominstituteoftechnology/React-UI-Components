import React from 'react';

const OperatorButton = props => {
  return (
    <div className="small-button operator-button" onClick={e => props.function(e)}>{props.text}</div>
  );
};

export default OperatorButton;