import React from 'react';
import './Button.css';
import WideButtons from './WideButton';
import SquareButton from './SquareButton';

const NumberButtons = () => {
    return (
        <div className='numberContainer'>
            <WideButtons number='clear' type='wide'/>
            <div className= 'numbers'>
                <SquareButton type='square boldBorder'number='7'/>
                <SquareButton type='square boldBorder'number='8'/>
                <SquareButton type='square boldBorder'number='9'/>
            </div>
            <div className= 'numbers'>
                <SquareButton type='square boldBorder'number='4'/>
                <SquareButton type='square boldBorder'number='5'/>
                <SquareButton type='square boldBorder'number='6'/>
            </div>
            <div className= 'numbers'>
                <SquareButton type='square boldBorder'number='1'/>
                <SquareButton type='square boldBorder'number='2'/>
                <SquareButton type='square boldBorder'number='3'/>
            </div>
            <WideButtons number='0' type='wide boldBorder'/>
        </div>
    );
};

export default NumberButtons;