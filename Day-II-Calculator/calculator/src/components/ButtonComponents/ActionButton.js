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

const DivideButton = () => {
  return <div className="aButtons divide">/</div>;
};

const MultiplyButton = () => {
  return <div className="aButtons multiply">x</div>;
};

const SubtractButton = () => {
  return <div className="aButtons subtract">-</div>;
};

const AddButton = () => {
  return <div className="aButtons add">+</div>;
};

const EqualsButton = () => {
  return <div className="aButtons equals">=</div>;
};

export default ActionButtons;
