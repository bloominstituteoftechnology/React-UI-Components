import React from 'react';
import './App.css';
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer  from "./components/CardComponents/CardContainer";
//import library from '@fortawesome/fontawesome-svg-core';
//import  {faComment, faHeart, faEnvelope, faRetweet} from '@fortawesome/free-solid-svg-icons';

//library.add(faComment, faHeart, faEnvelope, faRetweet )

const App = () => {
  return (
    <div className ="container">
      <HeaderContainer/>
      <CardContainer/>
    </div>
  )
};

export default App;
