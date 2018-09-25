import React, {Component} from 'react';
import './Button.css';


const Button = (props) => {
  return <button className={props.displayStyle}>{props.text}</button>
}


class ActionButton extends Component {
  render() {
    return (
    <div displayStyle="row-left" >
  

  <Button text="&divide;" displayStyle="action-row" />

  <Button text="&times;" displayStyle="action-row" />

  <Button text="-" displayStyle="action-row" />
  <Button text="+" displayStyle="action-row" />
  <Button text="=" displayStyle="action-row" />
      
      
          </div>);

  }

  }

  export default ActionButton;
  