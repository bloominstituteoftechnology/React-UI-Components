import React, {Component} from 'react';
import './Card.css';
import card from './img/Card.png';
import CardImage from './CardImage';
import CardContent from './CardContent';
import CardTitle from './CardTitle';


class CardContainer extends Component {
  render() {
    return (<div className="CardCont">
<a href='https://www.reactjs.org'>
          <CardImage/>
          </a>
          <CardTitle/>
          <CardContent/>

    </div>);

  }
}

export default CardContainer;
