import React from 'react';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import './App.css';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';

const App = () => {
  return (
    <div>
      <h3>Welcome!</h3>
      <HeaderTitle title='This is' />
      <HeaderTitle title='Just Spoken Codes' />
      <p>
        <HeaderContent />
      </p>

      <p>
        <strong>
          <HeaderContainer />
        </strong>
      </p>
    </div>
  );
};

export default App;
