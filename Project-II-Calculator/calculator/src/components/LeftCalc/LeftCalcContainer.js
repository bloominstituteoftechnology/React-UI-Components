import React from 'react';
import MainNumberContainer from './MainNumberContainer'
import CalcButton from '../ButtonComponents/CalcButton'
import './LeftCalc.css';

const LeftCalcContainer = _ => (
  <div className="left-calc-cont">
    <CalcButton innerBTN='Clear' addClass='full-width-btn' />
    <MainNumberContainer />
    <CalcButton innerBTN='0' addClass='full-width-btn' />
  </div>
)

export default LeftCalcContainer;