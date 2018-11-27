import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

class CardContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      banner: 'https://i.imgur.com/ey4oVZx.png',
      title: 'Get started with React',
      copy: "React makes it painless to create interactive UIs. Design simple views for each state in your application.",
      url: 'https://www.reactjs.org',
    };
  }

  render(){
    return (
      <div className='card-container'
      onClick={() => window.location.href=this.state.url}>
        <CardBanner img={this.state.banner}/>
        <CardContent copy={this.state.copy}
          title={this.state.title}
        />
      </div>
    );
  }
}

export default CardContainer;