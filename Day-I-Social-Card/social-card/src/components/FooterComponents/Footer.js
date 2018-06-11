import React from 'react';
import './Footer.css';

let commentCount = 0;
let syncCount = 0;
let likeCount = 0;
let emailCount = 0;

const Footer = () => (
  <div className="footer">
    <div>
      <i class="far fa-comment" data-fa-transform="flip-h" />{' '}
      {commentCount ? commentCount : ''}
    </div>
    <div>
      <i class="fas fa-sync" />
      {syncCount ? syncCount : ''}
    </div>
    <div>
      <i class="far fa-heart" />
      {likeCount ? likeCount : ''}
    </div>
    <div>
      <i class="far fa-envelope" />
      {emailCount ? emailCount : ''}
    </div>
  </div>
);

export default Footer;
