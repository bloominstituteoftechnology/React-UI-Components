import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => {
	return (
		<div className="CTA">
			<HeaderContainer />
			<CardContainer />
			<Footer />
		</div>
	);
};

export default App;
// git remote add upstream https://github.com/LambdaSchool/React-UI-Components.git
