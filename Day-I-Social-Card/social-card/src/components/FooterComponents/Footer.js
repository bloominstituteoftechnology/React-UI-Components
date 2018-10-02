import React from 'react';
import './Footer.css';
import DynamicButton from './DynamicButton';

const Footer = props => {
  return (
    <div className='card-footer'>
      <div className='buttons-container'>
        <DynamicButton type='comment' />
        <DynamicButton type='repeat' />
        <DynamicButton type='like' />
        <DynamicButton type='mail' />
      </div>
    </div>
  )
}


export default Footer;