import React from 'react';
import WorkspaceDisplay from './WorkspaceDisplay';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';
import OperatorButton from '../ButtonComponents/OperatorButton';

const CalculatorDisplay = props => (
    <div className='container border'>
        <WorkspaceDisplay num={0} />
        <div className='row border-bottom'>
            <div className='col-9 border-right'> <ActionButton text='clear' /> </div>
            <div className='col-3 bg-red'> <OperatorButton operator='÷' /> </div>
        </div>
        <div className='row border-bottom'>
            <div className='col-3'> <NumberButton num='7' /> </div>
            <div className='col-3 border-left border-right'> <NumberButton num='8' /> </div>
            <div className='col-3 border-right'> <NumberButton num='9' /> </div>
            <div className='col-3 bg-red'> <OperatorButton operator='×' /> </div>
        </div>
        <div className='row border-bottom'>
            <div className='col-3'> <NumberButton num='4' /> </div>
            <div className='col-3 border-left border-right'> <NumberButton num='5' /> </div>
            <div className='col-3 border-right'> <NumberButton num='6' /> </div>
            <div className='col-3 bg-red'> <OperatorButton operator='−' /> </div>
        </div>
        <div className='row border-bottom'>
            <div className='col-3'> <NumberButton num='1' /> </div>
            <div className='col-3 border-left border-right'> <NumberButton num='2' /> </div>
            <div className='col-3 border-right'> <NumberButton num='3' /> </div>
            <div className='col-3 bg-red'> <OperatorButton operator='+' /> </div>
        </div>
        <div className='row'>
            <div className='col-9 border-right'> <ActionButton text='0' /> </div>
            <div className='col-3 bg-red'> <OperatorButton operator='=' /> </div>
        </div>
    </div>
);

export default CalculatorDisplay;