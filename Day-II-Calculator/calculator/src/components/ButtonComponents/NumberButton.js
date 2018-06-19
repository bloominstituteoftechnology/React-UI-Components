import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';

const NumberButton = () => {
    const MyButton = props => {
        return <button className={props.customStyle}>{props.name}</button>;
      };
  
      MyButton.defaultProps = {
        name: 'Default text',
        customStyle: 'number-button'
      };
    const LargeButton = props => {
        return <button className={props.customStyle}>{props.name}</button>;
      };
  
      LargeButton.defaultProps = {
        name: 'Default text',
        customStyle: 'default-large-button'
      };
    return (
        <div className="number-column">
            <LargeButton className="number-button-large" name="clear"/>
            <MyButton className="number-button" name="7"/>
            <MyButton className="number-button" name="8"/>
            <MyButton className="number-button" name="9"/>
            <MyButton className="number-button" name="4"/>
            <MyButton className="number-button" name="5"/>
            <MyButton className="number-button" name="6"/>
            <MyButton className="number-button" name="1"/>
            <MyButton className="number-button" name="2"/>
            <MyButton className="number-button" name="3"/>
            <LargeButton className="number-button-large" name="0"/>
            </div>
    );
};

export default NumberButton;


  