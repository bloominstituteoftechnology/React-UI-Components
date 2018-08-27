import React from 'react';
import './Card.css';
import CardBanner from './CardBanner'
import CardContent from './CardContent'

const HeaderContainer = () => {
  return (
    <a href="https://www.reactjs.org">
      <div>
        <CardBanner />
        <CardContent />
      </div>
    </a>
  )
}

export default HeaderContainer
