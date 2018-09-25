import React, {Component} from 'react';
import './Display.css';


const Button = (props) => {
  return <button className={props.displayStyle}>{props.text}</button>
}


class CalculatorDisplay extends Component {
    render() {
      return (
      
        <Button text="0" displayStyle="input" />
      )}
  }

  export default CalculatorDisplay;
