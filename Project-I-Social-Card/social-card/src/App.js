import React from 'react';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import './App.css';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';

const App = () => {
  return (
    <div>
      <HeaderTitle title='This is' />
      <HeaderTitle title='Just Spoken Codes' />
      <p>
        <HeaderContent />
      </p>
      <ImageThumbnail />
      <p>
        <strong>
          <HeaderContainer />
        </strong>
      </p>
    </div>
  );
};

export default App;
