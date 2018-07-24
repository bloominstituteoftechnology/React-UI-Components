import React from 'react';
import './Button.css';


class NumberButton extends React.Component {

    constructor(props) {
        super(props);
    }


    numberPushed() {
        return (this.text);
    }

    render() {
      return(   
      <button onClick="numberPushed()" className={this.buttonStyle}>{this.text}</button>
      );
    }

}

export default NumberButton;
