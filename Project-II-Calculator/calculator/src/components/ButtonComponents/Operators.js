import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Button.css';


function Operators(props) {
  return (
    <div className='operator-icons'>
      <FontAwesomeIcon icon={props.opr.icon} />
    </div>
  )
}

export default Operators;