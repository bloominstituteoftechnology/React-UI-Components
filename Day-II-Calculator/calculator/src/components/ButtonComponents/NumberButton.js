import React from 'react';
import './Button.css';

class NumberButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: props.text
    };
  }

  onClick = (e) => {
    this.props.onUpdate(this.props.text);
    console.log('Clicked', this.props.text);
  }

  render(){
    return(
      <button className={'button button--number '+ this.props.buttonStyle} onClick={this.onClick}>
        <div>{this.props.text}</div>
      </button>
    )      
  }

}

export default NumberButton;