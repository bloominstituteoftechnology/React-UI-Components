import React from 'react';
import icons from 'glyphicons'
import './Footer.css';

const Footer = props => {

    const handleComment = () => {
      alert("you do not have rights to comment on this card!");
    }

    const handleTweet = () => {
      alert("Tweet Tweet!");
    };

    const handleLike = () => {
      alert("Do you really like it, is it is it wicked??");
    };

    const handleEmail = () => {
      alert("you do not have permission to send emails - maybe your computer is broken!?!");
    };
    return (
    <div className="footer-wrapper">
      <i className="fa tom-tag fa-comment fa-lg comment left-fa" onClick={() => { handleComment(); }}></i><i className="fa tom-tag fa-retweet fa-lg comment" onClick={(props) => { handleTweet(); }}></i><span>{props.retweets}</span><i className="fa tom-tag fa-heart fa-lg comment" onClick={() => { handleLike(); }}> </i><span>{props.likes}</span><i className="fa tom-tag fa-envelope fa-lg comment" onClick={() => { handleEmail(); }}> </i>
    </div>
    );
};

export default Footer;