import React, { Component } from 'react';
import tweet from './images/twitter.jpg';
import './Footer.css';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      likeCount: 0
    };
  }

  handleClick = () => {
    this.setState({ likeCount: this.state.likeCount + 1 });
  };

  render() {
    return (
      <div className="footer-container">
        <img
          className="twitter-icon"
          src={tweet}
          alt="Twitter Logo"
          onClick={this.handleClick}
        />
        <div>{this.state.likeCount}</div>
      </div>
    );
  }
}

export default Footer;
