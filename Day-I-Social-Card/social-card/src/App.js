import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
	return (
		<div className="CTA">
			<HeaderContainer />
			<CardContainer />
		</div>
	);
};

export default App;
// git remote add upstream https://github.com/LambdaSchool/React-UI-Components.git
