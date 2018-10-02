import React from 'react';
import './Button.css';
import Button from "./Button.js";

class NumberButton extends React.Component {
    render() {
      return (
        <div class = "buttonPanelNumber">
          <div class = "buttonPanelClear">
           <Button name="Clear" wide />
          </div>
          <div class = "buttonPanelRow">
            <Button name="7"/>
            <Button name="8"/>
            <Button name="9"/>
          </div>
          <div class = "buttonPanelRow">
            <Button name="4"/>
            <Button name="5"/>
            <Button name="6"/>
          </div>
          <div class = "buttonPanelRow">
            <Button name="1"/>
            <Button name="2"/>
            <Button name="3"/>
          </div>
          <div class = "buttonPanelZero">
            <Button name="0"wide />
          </div>
          </div>
      );
    }
  }
  
  export default NumberButton;