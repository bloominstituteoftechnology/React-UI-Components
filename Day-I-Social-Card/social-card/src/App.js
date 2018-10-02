import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';



const App = props => { 

  return (
    <div className="main-container">
     <HeaderContainer />
     <CardContainer/>
    </div>
  );
};

export default App;
