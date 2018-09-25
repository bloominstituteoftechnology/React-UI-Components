import React, {Component} from 'react';
import './Card.css';

class CardContent extends Component {
  render() {
    return (
      <div className="CardText">
      <h3>Lets learn about React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you are comfortable using components you are well on your way to mastering React!</h3>
      <h4>reactjs.org</h4>
    </div>
  );
  }
}

export default CardContent;
