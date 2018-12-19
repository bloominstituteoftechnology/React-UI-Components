import React from 'react';
import "./App.css";
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
const styles = {
  maxWidth:"500px",
  display:"block",
  margin: "0 auto",
  border:"1px solid gray",
  borderRadius:"2%",
  marginTop:"5%"
}


const App = () => {
  return (
    
    <div style={styles}>
            <HeaderContainer/>
    </div>
  );
};

export default App;
