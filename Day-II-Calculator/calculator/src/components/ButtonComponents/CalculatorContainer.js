import React from 'react';
import './Button.css';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay'
/* import CalculatorDisplay from '../DisplayComponents/Screen' */

import LowerContainer from './LowerContainer'

const CalculatorContainer = () => {
    return (
       <div className="CalculatorContainer"><CalculatorDisplay /> <LowerContainer /></div>
    
    )


}






export default CalculatorContainer;