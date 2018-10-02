import React from 'react';
import './Button.css';

class NumberButton extends React.Component {
    render() {
      return (
        <div className="component-button-panel">
          <div>
           <Button name="Clear" wide />
          </div>
          <div>
            <Button name="7" />
            <Button name="8" />
            <Button name="9" />
          </div>
          <div>
            <Button name="4"/>
            <Button name="5"/>
            <Button name="6"/>
          </div>
          <div>
            <Button name="1"/>
            <Button name="2"/>
            <Button name="3"/>
          </div>
          <div>
            <Button name="0"wide />
          </div>
        </div>
      );
    }
  }
  
  export default NumberButton;