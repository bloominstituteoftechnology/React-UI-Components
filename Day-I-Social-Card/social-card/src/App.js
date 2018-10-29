import React from 'react';
import './App.css';
import './components/HeaderComponents/HeaderContainer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
// import Footer from './components/FooterComponents/Footer';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
// import { faComment } from '@fortawesome/free-regular-svg-icons'
// import { faSync } from '@fortawesome/free-solid-svg-icons'
// import { faHeart } from '@fortawesome/free-regular-svg-icons'




// library.add(faStroopwafel);
// library.add(faComment);
// library.add(faSync);
// library.add(faHeart);

const App = () => {
  return (
    <div className= 'componentContainer'>
     
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
