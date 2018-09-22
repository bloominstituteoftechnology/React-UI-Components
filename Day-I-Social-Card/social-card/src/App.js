import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js';
// import './components/CardComponents/CardBanner.js';
// import './components/CardComponents/CardContent.js';
import Footer from './components/FooterComponents/Footer.js'

// import BasicButton from './zWORK/BasicButton';



const App = () => {
  return (
    <div>
      {/* <h3>Welcome to React Social Card!</h3>
      <p>
        you have basic content
      </p>
      */}
      {/* <BasicButton /> */}
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));
export default App
