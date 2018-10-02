import React from 'react';
import Display from '../DisplayComponents/CalculatorDisplay';
import ButtonContainer from '../ButtonComponents/ControlContainer';
import './Container.css';

const Container = props => {
    return (
        <div>
            <Display />
            <ButtonContainer />
        </div>
    )
};

export default Container;