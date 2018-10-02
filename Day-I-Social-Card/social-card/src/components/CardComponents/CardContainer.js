import React from 'react'

// import styling
import './Card.css'

// import components
import CardBanner from './CardBanner'
import CardContent from './CardContent'

const CardContainer = () => (
  <a href="https://www.reactjs.org">
    <div className="card-container">
      <CardBanner />
      <CardContent />
    </div>
  </a>
)

export default CardContainer
