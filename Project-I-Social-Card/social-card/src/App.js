// import React
import React from 'react';
// import APP component from App.js file
import './App.css';

// import individual components
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import ImgThumbnail from './components/HeaderComponents/ImageThumbnail';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <ImgThumbnail />
      <HeaderTitle />
      <p>
        ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- **
        ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- **
      </p>
      <h3>Welcome to React Social Card!</h3>
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
      </p>
    </div>
  );
};

export default App;

// NEW APP
// const NewApp = () => {
//   return (
//     <div className="headerContainer">

//     </div>
//   )
// }
// export default NewApp;
