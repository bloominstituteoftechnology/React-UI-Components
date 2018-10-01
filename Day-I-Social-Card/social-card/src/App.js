import React from 'react'

// import styling
import './App.css'

// import components
import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import CardContainer from './components/CardComponents/CardContainer'
import Footer from './components/FooterComponents/Footer'

const App = () => (
  <div className="social-card-container">
    <HeaderContainer />
    <CardContainer />
    <Footer />
  </div>
)

export default App
