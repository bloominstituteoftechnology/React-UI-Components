import React from 'react';
import './Button.css';
class ActionButton extends React.Component {
    render() {
      return (
        <div className="component-button-panel">
          <div>
            <Button name="÷" red />
            <Button name="X" red />
            <Button name="-" red />
            <Button name="+" red />
            <Button name="=" red />
          </div>
        </div>
      );
    }
  }
  
  export default ActionButton;