import React from 'react';
import './Button.css';

const ButtonContainer = props => {

  return (
    <div className={`button-container ${props.className}`}>
    {/* props.children holds everything that's passed between <ButtonContainer> </ButtonContainer>*/}
      {props.children}
    </div>
  );
};

export default ButtonContainer;
