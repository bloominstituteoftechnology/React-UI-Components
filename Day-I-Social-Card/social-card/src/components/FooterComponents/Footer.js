import React from 'react';
import './Footer.css';
import FooterIcon from './FooterIcon';
import speechBubble from './assets/speech-bubble.svg';
import refresh from './assets/refresh.svg';
import heart from './assets/heart.svg';
import mail from './assets/mail.svg';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddRetweet = this.handleAddRetweet.bind(this);
    this.handleAddFave = this.handleAddFave.bind(this);
    this.state = {
      retweetCount: 0,
      faveCount: 0
    };
  }
  componentDidMount() {
    const stringRetweetCount = localStorage.getItem('retweetCount');
    const stringFaveCount = localStorage.getItem('faveCount');
    const retweetCount = parseInt(stringRetweetCount, 10);
    const faveCount = parseInt(stringFaveCount, 10);

    if (!isNaN(retweetCount) && !isNaN(faveCount)) {
      this.setState(() => ({ 
        retweetCount,
        faveCount 
      }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.retweetCount !== this.state.retweetCount) {
      localStorage.setItem('retweetCount', this.state.retweetCount);
    }
    if (prevState.faveCount !== this.state.faveCount) {
      localStorage.setItem('faveCount', this.state.faveCount);
    }
  }
  handleAddRetweet() {
    this.setState((prevState) => {
      return {
        retweetCount: prevState.retweetCount + 1
      };
    });
  }
  handleAddFave() {
    this.setState((prevState) => {
      return {
        faveCount: prevState.faveCount + 1
      }
    })
  }

  render() {
    return (
      <div className="footer">
        <FooterIcon iconImg={speechBubble}/>
        <FooterIcon onClick={this.handleAddRetweet} iconImg={refresh} count={this.state.retweetCount} />
        <FooterIcon onClick={this.handleAddFave} iconImg={heart} count={this.state.faveCount}/>
        <FooterIcon iconImg={mail}/>
      </div>
    )
  }
}