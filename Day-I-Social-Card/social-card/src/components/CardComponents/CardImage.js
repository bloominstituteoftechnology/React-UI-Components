import React, {Component} from 'react';
import './Card.css';
import card from './img/Card.png'; // Tell Webpack this JS file uses this image

class CardImage extends Component {
  render() {
    return (<div className="CardImg">
      <img src={card} alt="Card"/>
    </div>);
  }
}

export default CardImage;
