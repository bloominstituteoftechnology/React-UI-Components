import React from 'react';
import './Display.css';
import HeaderBox from './HeaderBox';
import ColomnBox from './ColumnBox';
import NumbersBox from './NumbersBox';





function CalculatorDisplay(props) {
    return ( 
    <div className = "CalculatorDisplay">
        <HeaderBox />
        <div className="CalculatorButtonsDisplay">
                <NumbersBox />;
                
                <ColomnBox /> ;

        </div>


    </div>
    );
}

export default CalculatorDisplay;