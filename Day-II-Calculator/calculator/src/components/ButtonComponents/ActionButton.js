import React from 'react';
import './Button.css';

class ActionButton extends React.Component {
  constructor(props) {
    super(props);

      console.log(props);

    if (props.type === 'clear') {
      this.symbol = 'Clear';
    } else if (props.type === 'divide') {
      this.symbol = '÷';
    } else if (props.type === 'multiply') {
      this.symbol = 'x';
    } else if (props.type === 'subtract') {
      this.symbol = '-';
    } else if (props.type === 'add') {
      this.symbol = '+';
    } else if (props.type === 'equal') {
      this.symbol = '=';
    }
  }




  render() {
    return (
      <button className={'action-button btn-' + this.props.type}>
        {this.symbol}
      </button>
    )
  }
}

export default ActionButton;
