import React from 'react';
import './Footer.css';

const Icon = (props) => {
  return (
    <section className='icon-area'>
      <i className={props.icon} onClick={props.addToUpvote}></i>
    <p className='upvotes'>{props.upvotes}</p>
    </section>
  );
}

export default Icon;
