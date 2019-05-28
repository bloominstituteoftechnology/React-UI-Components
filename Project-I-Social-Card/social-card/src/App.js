import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';

const App = () => {
  return (
    <div className="app">
      <HeaderContainer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
