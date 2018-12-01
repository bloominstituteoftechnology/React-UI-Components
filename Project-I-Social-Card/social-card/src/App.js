import React from 'react';
import './App.css';

import HeaderComponent from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className = "card-container">
      <HeaderComponent />
      <CardContainer/>
    </div>
    
  );
};
// ReactDOM.render(<HeaderContainer />, document.getElementById('root'));
export default App;
