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
    this.setState({ loves: this.state.loves + 1});
    
  }

  retweetNumber = () => {
    this.setState( { retweets: this.state.retweets + 1})
  }

  render() {
    return (
      <div className='footer-container'>
        <i className='far fa-comment'></i>
        <div className='retweets' onClick={this.retweetNumber}>
          <i className="fas fa-sync-alt"></i> {this.state.retweets}
        </div>
        <div className='loves' onClick={this.loveNumber}>
          <i className="far fa-heart"></i> {this.state.loves}
          </div>
        <i className="far fa-envelope"></i>
      </div>
    );
  }
}
export default Footer;
