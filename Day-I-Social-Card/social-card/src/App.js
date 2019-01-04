import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContent from './components/CardComponents/CardContent'
import Footer from './components/FooterComponents/Footer'



const App = () => {
	return (
    <div id="app">
		<HeaderContainer />
    <CardContent />
    <Footer />
    </div>
	);
};

export default App;
