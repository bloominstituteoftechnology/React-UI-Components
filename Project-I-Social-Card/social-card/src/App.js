
import React from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js'; 
import Footer from './components/FooterComponents/Footer.js';

const App = () => {
  return (
    <div className={'app'}>
      <HeaderComponent 
      className={'header'}
      logo={'https://ibin.co/3whrpKSBbZ81.png'}
      altText={'logo'}
      title={'Cool School'}
      content={`Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!`}
      identifer={'CoolSchool'}
      date={'25 Mar'} />

      <CardContainer 
      image={'https://ibin.co/3wnC6SgIOJud.png'}
      heading={`Get Started with React`}
      content={`React makes it painless to create interactive UIs. Design simple views for each state in your applicaiton.`}
      url={'reactjs.org'} />

      <Footer />
      
    </div>
  );
};

export default App;