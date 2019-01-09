import React from 'react';
import './App.css';
import Header from './components/HeaderComponents/HeaderContainer';
import Card from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';



const App = () => {
  return (
    <div className="container">
     <Header/>
     <a className="react-link" href="https://reactjs.org/">
      <Card/> 
      </a>
     <Footer/>
    </div>
  );
};


export default App;
