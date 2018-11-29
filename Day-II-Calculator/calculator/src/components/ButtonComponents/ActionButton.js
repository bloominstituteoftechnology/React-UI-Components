import React from 'react';
import './Button.css';

const ActionButtons = () => {
  return (
    <div className="actionButtons">
      <ClearButton />
      <DivideButton />
      <MultiplyButton />
      <SubtractButton />
      <AddButton />
      <EqualsButton />
    </div>
  );
};
const ClearButton = () => {
  return <div className="clear">Clear</div>;
};

const DivideButton = () => {
  return <div classname="divide">/</div>;
};

const MultiplyButton = () => {
  return <div className="multiply">X</div>;
};

const SubtractButton = () => {
  return <div className="subtract">-</div>;
};

const AddButton = () => {
  return <div className="add">+</div>;
};

const EqualsButton = () => {
  return <div className="equals">=</div>;
};

export default ActionButtons;
