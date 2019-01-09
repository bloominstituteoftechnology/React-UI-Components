import React from 'react';
import envelope from './envelope-light.svg';
import comment from './comment-light.svg';
import heart from './heart-light.svg';
import sync from './sync-light.svg';
import './Footer.css';
import redheart from './heart-red.svg';

const Footer = props => {
  return (
    <div className='footer-container'>
      <img className='footer-img' src={comment} alt='' />
      <div className='num sync-num'>
        <img
          className='footer-img'
          src={sync}
          alt=''
          onClick={props.shareHandler}
        />
        <p>{props.shareCounter}</p>
      </div>
      <div className='num heart-num'>
        <img
          onClick={props.heartHandler}
          className='footer-img'
          src={props.isLiked ? redheart : heart}
          alt=''
        />
        <p>{props.heartCounter}</p>
      </div>

      <img className='footer-img' src={envelope} alt='' />
    </div>
  );
};

export default Footer;
