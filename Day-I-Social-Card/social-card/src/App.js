import React from 'react';
import ReactDOM from'react-dom';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import CardContainer from './components/CardComponents/CardContainer';
import CardThumbnail from './components/CardComponents/CardBanner';


const App = () => {
  return (
    <div>
      <div>
          <HeaderContainer/>
      </div>
      <span>
          <CardContainer/>
          
      </span>
    </div>
  )};
ReactDOM.render(<CardThumbnail/>, document.getElementById('root'));
ReactDOM.render(<ImageThumbnail/>, document.getElementById('root'));
export default App;

