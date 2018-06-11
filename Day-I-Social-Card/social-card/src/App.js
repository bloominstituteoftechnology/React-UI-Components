import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";



const App = () => {
  return (
    <div>
      <HeaderContainer/>
    </div>
  ); 
};

ReactDom.render(<App />, document.getElementById("root"));

export default App;
