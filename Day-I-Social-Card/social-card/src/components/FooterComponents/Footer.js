import React from 'react';
import './Footer.css';
import Icon from './Icon';

const Footer = (props) => {
  return (
    <section className='footer'>
      <Icon icon='icon far fa-comment fa-2x' upvotes={2} id='comment'/>
      <Icon icon='icon fas fa-sync fa-2x' upvotes={6} id='share'/>
      <Icon icon='icon far fa-heart fa-2x' upvotes={4} id='like'/>
      <Icon icon='icon far fa-envelope fa-2x' id='mail'/>
    </section>
  );
}

export default Footer;
