import React from 'react';
import './Card.css';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = _ => {
  return (
    <div className='card-container'>
      <HeaderContainer />
      <CardBanner imgSrc='https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png' />
      <CardContent bannerTitle='Get started with React' 
      bannerContent='React makes it painless to create interacive UIs. Design simple views for each state in your application.'  
      bannerLink='reactjs.org' 
      bannerLinkHref='https://reactjs.org/' />
    </div>
  )
}

export default CardContainer;