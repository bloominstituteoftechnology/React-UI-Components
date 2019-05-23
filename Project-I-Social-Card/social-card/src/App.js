import React from 'react';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import './App.css';
import HeaderContent from './components/HeaderComponents/HeaderContent';

const App = () => {
  return (
    <div>
      <h3>Welcome to React Social Card!</h3>
      <HeaderTitle title='This is' />
      <HeaderTitle title='Just Spoken Codes' />
      <p>
        <HeaderContent />
      </p>

      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div>
  );
};

export default App;
