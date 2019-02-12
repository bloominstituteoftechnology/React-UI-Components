import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const rootElement = document.getElementById("root");
ReactDOM.render(<HeaderContainer />, rootElement);
ReactDom.render(<CardContainer />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
