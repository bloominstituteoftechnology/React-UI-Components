import React from 'react';
import './App.css';
import CardComponent from './components/CardComponents/index';

const cardTitle = 'This is my card title yo.';

const cardBody =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quibusdam harum quasi maxime iusto, mollitia iste accusamus a quia eos est minus, dolores molestiae. Eveniet sed quaerat aut hic officia. Est quidem adipisci asperiores obcaecati sunt quam eveniet reiciendis, quo explicabo. Quos a omnis, modi tenetur consequatur velit aspernatur id deserunt eius consectetur harum fugiat facilis architecto eos magnam hic ut aut dicta aliquam. Optio sequi dicta provident aliquam eligendi eaque molestias sed, in aspernatur minima mi?';

const App = () => (
  <div>
    <h3>Welcome to React Social Card!</h3>
    <p>
      Begin by exploring the `components` directory. You'll notice we have a few
      files that we've already included in there to get you started right away
      building components. You'll need to make sure you include your components
      that you build in this file to watch your app come to life
    </p>
    <p>
      <strong>
        Don't forget to `default export` your components and import them here
        inside of this file in order to make them work.
      </strong>
    </p>
    <hr />
    <CardComponent title={cardTitle} body={cardBody} />
  </div>
);

export default App;
