import React from 'react';
import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';


class App extends React.Component {
render(){
  return (
    <div className="main-container">


      <HeaderContainer />
      <a className="card-link" href="http://www.reactjs.org"><CardContainer /></a>
      <Footer/>

    </div>
  );
}
}


export default App;
