import React from 'react';
import './Footer.css';

const addToUpvote = (element) => {
  this.id = element.target.id;
  const icons = document.querySelectorAll('.icon');

  icons.forEach((icon) => {
    if(icon.id === this.id) {
      // do not allow clicking for mail
      if(this.id === 'mail') {
        return null;
      }
      else {
      let currentNumber = icon.nextSibling.innerHTML;
      let result = Number(currentNumber) + 1;
      icon.nextSibling.innerHTML = result;
      }
    }
  })

}

const Icon = (props) => {
  return (
    <section className='icon-area'>
      <i className={props.icon} onClick={addToUpvote} id={props.id}></i>
    <p className='upvotes'>{props.upvotes}</p>
    </section>
  );
}

export default Icon;
