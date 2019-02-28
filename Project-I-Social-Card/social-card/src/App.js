import React from 'react';
import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import CardContainer from './components/CardComponents/CardContainer'
import Footer from './components/FooterComponents/Footer'

const App = () => {
  let author = {
    name: "Lambda School",
    handle: "@LambdaSchool"
  }
  return (
    <div className="twitter-card">
      <HeaderContainer author={author} />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
