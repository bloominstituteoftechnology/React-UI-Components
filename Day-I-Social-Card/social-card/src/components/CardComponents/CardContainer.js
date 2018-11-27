import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

class CardContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      banner: 'https://i.imgur.com/ey4oVZx.png',
    };
  }

  render(){
    return (
      <div className='card-container'>
        <CardBanner img={this.state.banner}/>
        <CardContent />
      </div>
    );
  }
}

export default CardContainer;