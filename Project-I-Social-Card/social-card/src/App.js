import React from 'react';

import './App.css';
import HeaderTitle from "./components/HeaderComponents/HeaderTitle";
import HeaderContent from './components/HeaderComponents/HeaderContent';

const App = () => {
  return (
    <div class="App">
      <HeaderTitle />
      <div class="Content">
        <HeaderContent />
      </div>
    </div>
  );
};

export default App;
