import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';


const joeProfile = {
  name: 'Joe',
  identity: 'Strong and Big',
  age: 28,
  bestFriend: 'Jordan Stanfield'
}


const App = () => {
  return (
    <div className='primary-container'>
      <HeaderContainer />
      <CardContainer person={joeProfile} />
    </div>
  );
};

export default App;
