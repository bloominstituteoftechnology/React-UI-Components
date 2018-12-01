import React from 'react';
import './Button.css';


// const NumberButton = props => {
//   return (
//     <div className="btn-small">
//       <button className={props.buttonStyle}>{props.text}</button>
//     </div>
//   )
// }

class NumberButton extends React.Component {  
  constructor() {
    super(); 
    this.state = {
      number: 0
    }
  }

  appendNumber = () => {
    this.setState({ number: this.props.text });
  }

  render() {
    return (
      <div onClick={this.appendNumber} className={`btn-small ${this.props.buttonStyle}`}>{this.props.text}</div>
    )
  }
}

export default NumberButton;