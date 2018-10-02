import React from 'react';
import './App.css';
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faSyncAlt)

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
