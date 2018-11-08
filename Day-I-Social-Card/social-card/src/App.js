import React from 'react';
import './App.css';
import Header from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js'; 
import Footer from './components/FooterComponents/Footer.js';

const App = () => {
  return (
    <div className={'app'}>
      <Header 
      className={'header'}
      logo={'https://ibin.co/3whrpKSBbZ81.png'}
      altText={'logo'}
      title={'Lambda School'}
      content={`Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!`}
      identifer={'LambdaSchool'}
      date={'26 jan'} />

      <CardContainer 
      image={'https://ibin.co/3wnC6SgIOJud.png'}
      heading={`Get Started with React`}
      content={`React makes it painless to create interactive UIs. Design simple views for each state in your applicaiton.`}
      url={'reactjs.org'} />

      <Footer />

      
      {/* <h3>Welcome to React Social Card!</h3>
      <p>
        Begin by exploring the `components` directory. You'll notice we have a
        few files that we've already included in there to get you started right
        away building components. You'll need to make sure you include your
        components that you build in this file to watch your app come to life
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p> */}
      
    </div>
  );
};

export default App;
