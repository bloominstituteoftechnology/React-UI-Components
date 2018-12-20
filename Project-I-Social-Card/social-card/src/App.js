import React from 'react';
import "./App.css";
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardComponents from "./components/CardComponents/CardContainer";
import FooterComponents from"./components/FooterComponents/Footer"
const styles = {
  maxWidth:"500px",
  display:"block",
  margin: "0 auto",
  // border:"1px solid gray",
  // borderRadius:"2%",
  marginTop:"5%"
}


const App = () => {
  return (
    
    <div style={styles}>
            <HeaderContainer/>
            <CardComponents/>
            <FooterComponents />
    </div>
  );
};

export default App;
