import React from 'react';
import './Button.css';

class NumberButton extends React.Component {
  render() {
    return (
      <button className={'number-button btn-' + this.props.num}>
        {this.props.num}
      </button>
    )
  }
}

export default NumberButton;
