import React from 'react';
import './Display.css';
import Box from './Box';


const CalculatorDisplay = () => {

    return (
        <div className="display">
            <Box number='0' background='btn__xlong'/>
            <Box number='clear' background='btn__long'/>
            <Box number='%' background='btn__red'/>
            <Box number='9'/>
            <Box number='8'/>
            <Box number='7'/>
            <Box number='X' background='btn__red'/>
            <Box number='6'/>
            <Box number='5'/>
            <Box number='4'/>
            <Box number='-' background='btn__red'/>        
            <Box number='3'/>
            <Box number='2'/>
            <Box number='1'/>
            <Box number='+' background='btn__red'/>
            <Box number='0' background='btn__long'/>
            <Box number='=' background='btn__red'/>
            
        </div>
    )
};
export default CalculatorDisplay;
