import React from 'react';
import './App.css';
import CardComponent from './components/CardComponents/index';
import FooterComponent from './components/FooterComponents/Footer';
import HeaderComponent from './components/HeaderComponents';

const Logo = require('./images/logo.jpg');

const cardTitle = 'This is my card title yo.';

const cardBody =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quibusdam harum quasi maxime iusto, mollitia iste accusamus a quia eos est minus, dolores molestiae. Eveniet sed quaerat aut hic officia. Est quidem adipisci asperiores obcaecati sunt quam eveniet reiciendis, quo explicabo. Quos a omnis, modi tenetur consequatur velit aspernatur id deserunt eius consectetur harum fugiat facilis architecto eos magnam hic ut aut dicta aliquam. Optio sequi dicta provident aliquam eligendi eaque molestias sed, in aspernatur minima mi?';

const header = {
  title: 'Welcome to React Social Card!',
  body:
    "Begin by exploring the components directory You'll notice we have a few files that weve already included in there to get you started right away building componentsYoull need to make sure you include your components that you build in this file to watch your app come to life",
  img: Logo,
};

const App = () => (
  <div>
    <HeaderComponent {...header} />
    <CardComponent title={cardTitle} body={cardBody} />
    <FooterComponent items={['Home', 'Contact', 'About', 'Blog']} />
  </div>
);

export default App;
