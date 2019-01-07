import React from 'react';
import './Card.css';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import lambdaImg from '../../imgs/lambda-logo.jpg';
import Footer from '../FooterComponents/Footer';

const CardContainer = _ => {
  return (
    <div className='card-container'>
    <img src={lambdaImg} alt="" className="card-prof-pic"/>
      <a href="https://reactjs.org/" className="card-main">
        <HeaderContainer />
        <div className='card-bottom-cont'>
          <CardBanner />
          <CardContent bannerTitle='Get started with React' 
          bannerContent='React makes it painless to create interacive UIs. Design simple views for each state in your application.'  
          bannerLink='reactjs.org' 
          bannerLinkHref='https://reactjs.org/' />
          <Footer />
        </div>
      </a>
    </div>
  )
}

export default CardContainer;