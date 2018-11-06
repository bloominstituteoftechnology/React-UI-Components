import React from 'react';
import './Footer.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.count}

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  render() {
    return (
      <div className="button" onClick={this.handleClick}>
        <i className={this.props.fontName}></i>
        {this.state.count === 0 || this.state.count}
      </div>
    );
  }
}

class Footer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="footer">
        <Button className="comment-btn" fontName="far fa-comment" count={0} />
        <Button className="retweet-btn"  fontName="fas fa-sync" count={6} />
        <Button className="like-btn"  fontName="far fa-heart" count={4} />
        <Button className="message-btn"  fontName="far fa-envelope" count={0} />
      </div>
    );    
  }
}

export default Footer;