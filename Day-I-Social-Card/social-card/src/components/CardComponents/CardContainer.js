import React from 'react'
import './Card.css'
import CardBanner from './CardBanner'
import CardContent from './CardContent'
import HeaderContainer from '../HeaderComponents/HeaderContainer'
import Footer from '../FooterComponents/Footer'

const CardContainer = (props) => {
  return (
    <div className='CardContainer'>
      <HeaderContainer />
      <CardBanner />
      <CardContent />
      <Footer />
    </div>
  )
}

export default CardContainer
