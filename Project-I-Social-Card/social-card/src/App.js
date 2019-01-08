import React, {Component} from 'react';

import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
import CommentContainer from './components/CommentComponents/CommentContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showComment: false,
      hasHearted: localStorage.getItem('hasHearted') || false
    };
  }

  comment = () => {
    this.setState(prevState => ({showComment: !prevState.showComment}));
  }

  retweet = () => {
    window.location.href = "https://twitter.com/login?lang=en";
  }

  heart = () => {
    this.setState(prevState => ({hasHearted: !prevState.hasHearted}));
    localStorage.setItem('hasHearted', this.state.hasHearted);
  }

  message = () => {
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
        <CommentContainer
          showComment={this.state.showComment} />
      </div>
    );
  }
}
export default App;
