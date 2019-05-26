import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import lambdaLogo from './assets/lambdalogo.jpg';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
const App = () => {
  const retrieveDate = () => {
    let date = new Date();
    let d = date.getDate();
    let m = date.getMonth();
    switch(m) {
      case 0:
        m ='Jan';
        break;
      case 1:
        m = 'Feb';
        break;
      case 2:
        m = 'Mar';
        break;
      case 3:
        m = 'Apr';
        break;
      case 4:
        m = 'May';
        break
      case 5:
        m = 'Jun';
        break;
      case 6:
        m = 'Jul';
        break;
      case 7:
        m = 'Aug';
        break;
      case 8:
        m = 'Sept';
        break;
      case 9: 
        m = 'Oct';
        break;
      case 10:
        m = 'Nov';
        break;
      case 11:
        m = 'Dec';
        break;
      default:
        return m;
    }
    return `${m} ${d}`

  }
  return (
    <div>
      <HeaderContainer lambdaLogo={lambdaLogo} altText="lambda-logo" retrieveDate={retrieveDate}/>
      <CardContainer  />
      <Footer />
    </div>
  );
};

export default App;
