import React, {Component} from 'react';
import './Button.css';


const Button = (props) => {
  return <button className={props.displayStyle}>{props.text}</button>
}



class NumberButton extends Component {
    render() {
      return (
        <div>
          <div displayStyle="row" >

      <Button text="clear" displayStyle="action-clear" /></div>
      <div displayStyle="row" >
      <Button text="7" displayStyle="button" />
        <Button text="8" displayStyle="button" />
        <Button text="9" displayStyle="button" /></div>
        <div displayStyle="row" >
        <Button text="4" displayStyle="button" />
        <Button text="5" displayStyle="button" />
        <Button text="7" displayStyle="button" /></div>
        <div displayStyle="row" >

        <Button text="1" displayStyle="button" />
        <Button text="2" displayStyle="button" />
        <Button text="3" displayStyle="button" /></div>
        
        <div displayStyle="row" >
        
          <Button text="0" displayStyle="zero-button" /></div>
      </div>
        );
  
    }
  }
// 
  
  export default NumberButton;
  