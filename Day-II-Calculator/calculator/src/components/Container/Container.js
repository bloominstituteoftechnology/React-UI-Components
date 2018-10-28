import React from 'react';
import Display from '../DisplayComponents/CalculatorDisplay';
import ButtonContainer from '../ButtonComponents/ControlContainer';
import './Container.css';

const Container = props => {
    return (
        <div className='appContainer'>
            <Display total={props.total}/>
            <ButtonContainer clearButton={props.clearButton} />
        </div>
    )
};

export default Container;