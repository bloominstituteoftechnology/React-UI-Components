import React, {Component} from 'react';

import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showComment: false,
      hasHearted: localStorage.getItem('hasHearted') || false
    };
  }

  comment() {
    window.location.href = "https://twitter.com/login?lang=en";
  }

  retweet() {
    window.location.href = "https://twitter.com/login?lang=en";
  }

  heart = () => {
    this.setState(prevState => ({hasHearted: !prevState.hasHearted}));
    localStorage.setItem('hasHearted', this.state.hasHearted);
  }

  message() {
    window.location.href = "https://twitter.com/login?lang=en";
  }

  render() {
    return (
      <div className="card">
        <HeaderContainer />
        <CardContainer />
        <Footer
          hasHearted={this.state.hasHearted}
          comment={this.comment}
          retweet={this.retweet}
          heart={this.heart}
          message={this.message} />
      </div>
    );
  }
}
export default App;
