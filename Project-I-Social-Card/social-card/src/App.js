import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import './App.css';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className="app">
      <HeaderContainer 
        handle="LambdaSchool"
        thumbnail="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"
        content="Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it 
        simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!"
        name="Lambda School"
        date="26 jan"
        link="https://lambdaschool.com/"
      />
      <CardContainer
        href="https://www.reactjs.org"
        src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"
        title="Get started with React"
        body="React makes it painless to create interactive UIs. Design simple views for each state in your application."
        domain="reactjs.org"
      />
      <Footer />
    </div>
  );
};

export default App;
