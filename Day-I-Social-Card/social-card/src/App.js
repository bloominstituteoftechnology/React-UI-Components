import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
// import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
// import HeaderTitle from './components/HeaderComponents/HeaderTitle';
// import HeaderContent from './components/HeaderComponents/HeaderContent';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <section>
      <HeaderContainer />
      <div> 
      <CardContainer />
      </div>
    </section>
  );
};

export default App;
