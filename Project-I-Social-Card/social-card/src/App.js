import React from 'react';
import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: null,
      retweets: null,
      likes: null
    };
  }

  render() {
    return (
      <div className='app'>
        <HeaderContainer />
        <CardContainer />
        <Footer 
          comments={this.state.comments}
          retweets={this.state.retweets}
          likes={this.state.likes}
        />
      </div>
    );
  }

};

export default App;
