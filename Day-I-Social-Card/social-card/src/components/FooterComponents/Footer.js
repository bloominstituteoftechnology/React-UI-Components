import React from 'react';
import './Footer.css';

let commentCount = 1;
let syncCount = 0;
let likeCount = 0;
let emailCount = 0;

const Footer = () => (
  <div className="footer">
    <div
      onClick={() => {
        commentCount++;
        console.log(commentCount);
      }}
    >
      <i className="far fa-comment" data-fa-transform="flip-h" />{' '}
      {commentCount ? commentCount : ''}
    </div>
    <div>
      <i className="fas fa-sync" />
      {syncCount ? syncCount : ''}
    </div>
    <div>
      <i className="far fa-heart" />
      {likeCount ? likeCount : ''}
    </div>
    <div>
      <i className="far fa-envelope" />
      {emailCount ? emailCount : ''}
    </div>
  </div>
);

export default Footer;
