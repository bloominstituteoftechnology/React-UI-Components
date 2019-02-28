import React from 'react';

import './App.css';
import HeaderTitle from "./components/HeaderComponents/HeaderTitle";
import HeaderContent from './components/HeaderComponents/HeaderContent';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';

const App = () => {
  return (
    <div class="App">

      <div class="Header">
        <ImageThumbnail />
        <HeaderTitle />  
      </div>
      

      <div class="Content">
        <HeaderContent />
      </div>

    </div>
  );
};

export default App;
