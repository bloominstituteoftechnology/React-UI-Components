import React from 'react';
import './Button.css';

const ActionButton = () => {
    const MyButton = props => {
        return <button className={props.customStyle}>{props.name}</button>;
      };
  
      MyButton.defaultProps = {
        name: 'text',
        customStyle: 'action-button'
      };
    return (
        <div className="action-column">
            <MyButton className="action-button" name="÷" alt="division"/>
            <MyButton className="action-button" name="x" alt="multiply"/>
            <MyButton className="action-button" name="-" alt="minus_better"/>
            <MyButton className="action-button" name="+" alt="plus"/>
            <MyButton className="action-button" name="=" alt="equals"/>
            </div>
    );
};

export default ActionButton;