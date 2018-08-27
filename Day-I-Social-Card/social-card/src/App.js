import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js'
import CardContainer from './components/CardComponents/CardContainer.js'
import Footer from './components/FooterComponents/Footer.js'

const App = () => {
  return (
    <div>
      <HeaderContainer thumbnail= 'https://ibin.co/3whrpKSBbZ81.png' name='Lambda School' handle='LambdaSchool' date='26 jan' />
      <CardContainer banner='https://ibin.co/3wnC6SgIOJud.png' title='Get started with React' link='reactjs.org' />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
