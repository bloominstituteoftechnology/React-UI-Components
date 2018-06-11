import React from 'react'
import './Card.css'
import CardBanner from './CardBanner'
import CardContent from './CardContent'
import HeaderContainer from '../HeaderComponents/HeaderContainer'

const CardContainer = () => {
  return (
    <div className='CardContainer'>
      <HeaderContainer />
      <CardBanner />
      <CardContent />
    </div>
  )
}

export default CardContainer
