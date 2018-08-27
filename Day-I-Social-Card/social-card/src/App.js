import React from 'react';
import './App.css';
import MyContent from './components/HeaderComponents/HeaderContent.js';
import MyTitle from './components/HeaderComponents/HeaderTitle.js';
import MyImage from './components/HeaderComponents/ImageThumbnail.js';
import CardDiv from './components/CardComponents/CardContainer.js';
import MyFooter from './components/FooterComponents/Footer.js';

const App = () => {
  return (
    // <div>
    //   <h3>Welcome to React Social Card!</h3>
    //   <p>
    //     Begin by exploring the `components` directory. You'll notice we have a
    //     few files that we've already included in there to get you started right
    //     away building components. You'll need to make sure you include your
    //     components that you build in this file to watch your app come to life
    //   </p>
    //   <p>
    //     <strong>
    //       Don't forget to `default export` your components and import them here
    //       inside of this file in order to make them work.
    //     </strong>
      //   </p>
      // </div>
      <div>
	<div>
	  <MyImage />
          <section>
	    <MyTitle />
	    <MyContent />
	    <CardDiv />
	    <MyFooter />
	  </section>
	</div>

      </div>
  );
};

export default App;
