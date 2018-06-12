import React from 'react';
import './Button.css';

// const NumberButton = props => (
//   <div className={`button-${props.kind}`}>
//     <p>{props.item}</p>
//   </div>
// );

class NumberButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    this.numberClick = this.numberClick.bind(this);
  }

  numberClick() {
    let num = this.props.item;
    console.log('props before', num);
    console.log('state before', this.state);
    this.setState({ number: num });
    console.log('state after', this.state);
  }

  render() {
    return (
      <div className={`button-${this.props.kind}`} onClick={this.numberClick}>
        <p>{this.props.item}</p>
      </div>
    );
  }
}

export default NumberButton;
