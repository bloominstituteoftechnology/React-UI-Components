import React from 'react';
import './Footer.css';
import DynamicButton from './DynamicButton';

const Footer = props => {
  return (
    <div className='card-footer'>
      <DynamicButton type='comment' />
      <DynamicButton type='repeat' />
      <DynamicButton type='like' />
      <DynamicButton type='mail' />
    </div>
  )
}


export default Footer;