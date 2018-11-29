import React from 'react';
import './Button.css';

const ActionButtons = () => {
  return (
    <div className="actionButtons">
      <DivideButton />
      <MultiplyButton />
      <SubtractButton />
      <AddButton />
      <EqualsButton />
    </div>
  );
};

const DivideButton = props => {
  return <div className="aButtons divide">/</div>;
};

const MultiplyButton = props => {
  return <div className="aButtons multiply">x</div>;
};

const SubtractButton = props => {
  return <div className="aButtons subtract">-</div>;
};

const AddButton = props => {
  return <div className="aButtons add">+</div>;
};

const EqualsButton = props => {
  return <div className="aButtons equals">=</div>;
};

export default ActionButtons;
