import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import HeaderContentHeader from "./components/HeaderComponents/HeaderContentHeader";
import HeaderContentBody from "./components/HeaderComponents/HeaderContentBody";
import HeaderTitle from "./components/HeaderComponents/HeaderTitle";
import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";

const App = () => (
  <div>
    <HeaderContainer />
    <HeaderContentHeader />
    <HeaderContentBody />
    <HeaderTitle />
    <ImageThumbnail />
  </div>   
  );

ReactDOM.render(<App />, document.getElementById('root'));
