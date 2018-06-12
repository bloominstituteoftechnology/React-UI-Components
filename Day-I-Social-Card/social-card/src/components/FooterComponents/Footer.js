import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentCount: 1,
      syncCount: 0,
      likeCount: 1,
      emailCount: 1,
    };
    this.updateComment = this.updateComment.bind(this);
    this.updateSync = this.updateSync.bind(this);
    this.updateLike = this.updateLike.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }
  updateComment() {
    let count = this.state.commentCount;
    count++;
    this.setState({ commentCount: count });
  }
  updateSync() {
    let count = this.state.syncCount;
    count++;
    this.setState({ syncCount: count });
  }
  updateLike() {
    let count = this.state.likeCount;
    count++;
    this.setState({ likeCount: count });
  }
  updateEmail() {
    let count = this.state.emailCount;
    count++;
    this.setState({ emailCount: count });
  }
  render() {
    let { commentCount, syncCount, likeCount, emailCount } = this.state;
    return (
      <div className="footer">
        <div onClick={this.updateComment}>
          <i className="far fa-comment" data-fa-transform="flip-h" />{' '}
          {commentCount ? commentCount : ''}
        </div>
        <div onClick={this.updateSync}>
          <i className="fas fa-sync" /> {syncCount ? syncCount : ''}
        </div>
        <div onClick={this.updateLike}>
          <i className="far fa-heart" /> {likeCount ? likeCount : ''}
        </div>
        <div onClick={this.updateEmail}>
          <i className="far fa-envelope" /> {emailCount ? emailCount : ''}
        </div>
      </div>
    );
  }
}
export default Footer;
