import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import CardContainer from './components/CardComponents/CardContainer'
import './App.css';

const App = () => {
  let props = {
    header: {
      thumbnail: {
        src: 'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png',
        alt: 'Lambda School',
      },
      title: {
        acnt_name: 'Lambda School',
        acnt_tag: 'LambdaSchool',
        date: '26 jan',
      },
      content: {
        text: "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components, you are well on your way to mastering React!",
      },
    },
    card: {
      banner: {
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png',
        alt: 'React Logo',
      },
      content: {
        title: 'Get started with React',
        text: 'React makes it painless to create interactive UIs. Design simple views for each state in your application.',
        link: 'reactjs.org',
      },
    }
  }
  return (
    <div className='social-card'>
      <HeaderContainer header={props.header}/>
      <CardContainer card={props.card}/>
    </div>
  );
};

export default App;
