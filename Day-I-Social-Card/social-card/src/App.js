import React from 'react'
import './App.css'
import CardContainer from './components/CardComponents/CardContainer'
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail'

const App = () => {
  return (
    <div className={'App'}>
      <ImageThumbnail />
      <CardContainer />
    </div>
  )
}

export default App
