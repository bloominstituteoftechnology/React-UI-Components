import React from 'react';
import './Footer.css';

const addToUpvote = () => {
  console.log('it works on click');
}

const Icon = (props) => {
  return (
    <section className='icon-area'>
      <i className={props.icon} onClick={addToUpvote}></i>
    <p className='upvotes'>{props.upvotes}</p>
    </section>
  );
}

export default Icon;
