import React from 'react';
import './Button.css';
import ActionButtonContainer from './ActionButtonContainer';
import NumberButtonContainer from './NumberButtonContainer';

const ButtonsContainer = () => {
    return (
      <div>
        <ActionButtonContainer />
        <NumberButtonContainer />
      </div>
    );
};


export default ButtonsContainer;