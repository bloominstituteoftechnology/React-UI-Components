import React from 'react';
import ButtonRow from '../ButtonComponents/ButtonRow';

const RightCalcContainer = _ => (
  <div className="right-calc-continer">
    <ButtonRow addClass='action-btn' range={['÷', 'X', '-', '+', '=']} />
  </div>
)

export default RightCalcContainer;