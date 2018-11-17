import React from 'react';
import './App.css';

import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="main-container">
      <div className="inner-container">
        
          
           <div className="button-container">
            <NumberButton type="number-btn" value="7" />
            <NumberButton type="number-btn" value="8" />
            <NumberButton type="number-btn" value="9" />
            
          </div>
           <div className="button-container">
            <NumberButton type="number-btn" value="4" />
            <NumberButton type="number-btn" value="5" />
            <NumberButton type="number-btn" value="6" />
            
          </div>
           <div className="button-container">
            <NumberButton type="number-btn" value="1" />
            <NumberButton type="number-btn" value="2" />
            <NumberButton type="number-btn" value="3" />
            
          </div>
           <div className="button-container">
            <NumberButton type="top-btn number-btn" value="0" />
            
          </div>
       </div>
    </div>
  );
};

export default App;
