import React from 'react';
import './Rows.css';
import '../ButtonComponents/Button.css'
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const Row1 = props => {
    return (
      <div className = "rows">
        <ActionButton text="clear"/>
        <NumberButton text="&#247;" opStyles="ops"/>
      </div>
    );
  };

  export default Row1;