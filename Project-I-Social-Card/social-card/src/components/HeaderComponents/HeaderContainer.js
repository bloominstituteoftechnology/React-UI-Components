import React from 'react';
import ReactDOM from 'react-dom';
import HeaderContent from './components/HeaderContent';
import HeaderTitle from './components/HeaderTitle';
import imageThumnail from '/components/imageThumnail';
import './Header.css';


function App() {
    return (
      <div className="App">
        <HeaderContent />
        <HeaderTitle />
        <imageThumnail />
      </div>
    );
  }
  
  const rootElement = document.getElementById('root');
  ReactDOM.render(<App />, rootElement);