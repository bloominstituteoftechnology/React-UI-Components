import React from 'react';
import './Footer.css';
import DynamicButton from './DynamicButton';

const Footer = props => {
  return (
    <div className='card-footer'>
      <div className='buttons-container'>
        <div className='button'><DynamicButton type='comment' /></div>
        <div className='button'><DynamicButton type='repeat' />8</div>
        <div className='button'><DynamicButton type='like' />4</div>
        <div className='button'><DynamicButton type='mail' /></div>
      </div>
    </div>
  )
}


export default Footer;