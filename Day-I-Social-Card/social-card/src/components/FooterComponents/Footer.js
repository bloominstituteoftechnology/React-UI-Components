import React, { Component } from 'react';
import './Footer.css';


// const Footer = () => {
//   return (
//     <div className='footer-container'>
//       <i className='far fa-comment'></i>
//       <div className='icon-group'>
//         <i className="fas fa-sync-alt"></i> 6
//       </div>
//       <div className='icon-group'>
//         <i className="far fa-heart"></i> 4
//       </div>
//       <i className="far fa-envelope"></i>
//     </div>
//   )
// }

class Footer extends Component {
  constructor() {
    super()
    this.state = {
      comments: 0,
      loves: 0,
      retweets: 0,
      shares: 0,
    }
  }

  loveNumber = () => {
    this.setState({ loves: this.state.loves + 1})

  }

  retweetNumber = () => {
    this.setState( { retweets: this.state.retweets + 1})
  }

  commentNumber = () => {
    this.setState( { comments: this.state.comments + 1})
  }

  shareNumber = () => {
    this.setState( { shares: this.state.shares + 1})
  }

  render() {
    return (
      <div className='footer-container'>
        <div className='comments' onClick={this.commentNumber}>
          <i className='far fa-comment'></i> {this.state.comments}
        </div>
        <div className='retweets' onClick={this.retweetNumber}>
          <i className="fas fa-sync-alt"></i> {this.state.retweets}
        </div>
        <div className='loves' onClick={this.loveNumber}>
          <i className="far fa-heart"></i> {this.state.loves}
          </div>
          <div className='shares' onClick={this.shareNumber}>
            <i className="far fa-envelope"></i> {this.state.shares}
          </div>
      </div>
    );
  }
}
export default Footer;
