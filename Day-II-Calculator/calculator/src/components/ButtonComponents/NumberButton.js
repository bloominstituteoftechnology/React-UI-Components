import React from 'react';
import './Button.css';

export const addNums = props => (
  <input onChange = {props.onChange}
  />
)

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
        customStyle: 'large-button'
      };
    return (
        <div className="number-column">
            <LargeButton className="large-button" name="clear"/>
            <MyButton className="number-button" name="7"/>
            <MyButton className="number-button" name="8"/>
            <MyButton className="number-button" name="9"/>
            <MyButton className="number-button" name="4"/>
            <MyButton className="number-button" name="5"/>
            <MyButton className="number-button" name="6"/>
            <MyButton className="number-button" name="1"/>
            <MyButton className="number-button" name="2"/>
            <MyButton className="number-button" name="3"/>
            <LargeButton className="large-button" name="0"/>
            </div>
    );
};

export default NumberButton;


  