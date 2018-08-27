import React from 'react';
import icons from 'glyphicons'
import './Footer.css';

const Footer = props => {
  
    return (
    <div className="footer-wrapper">
      <i className="fa tom-tag fa-comment fa-lg comment left-fa" onClick={() => { alert("You can not comment on this thread!") }}></i><i className="fa tom-tag fa-retweet fa-lg comment" onClick={(props) => { alert(`This post has 6 retweets!`) }}></i><span>6</span><i className="fa tom-tag fa-heart fa-lg comment" onClick={() => { alert("Do you really like it, is it is it wicked??") }}> </i><span>4</span><i className="fa tom-tag fa-envelope fa-lg comment" onClick={() => { alert("you do not have permission to send emails - maybe your computer is broken!?!") }}> </i>
    </div>
    );
};

export default Footer;