import React from 'react';
import './App.css';
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";

const App = () => {
  return (
    <div className="container">
      <HeaderContainer imageLink={thumbnailImagesLinks[0]} title={headerTitleTitles[0]} timestamp={headerTitleTimestamp[0]} text={headerTexts[0]} />
      <CardContainer src= {cardBannerLinks[0]} header={cardContentHeaders[0]} text={cardContentTexts[0]} link={cardContentLinks[0]} redirect={cardContentRedirect[0]} />
    </div>
  );
};

// header content
const thumbnailImagesLinks = ['https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png'];
const headerTitleTitles = ['Lambda School'];
const headerTitleTimestamp = ['26 jan'];
const headerTexts = [
  "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!"
];

//card content
const cardBannerLinks = ['https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png'];
const cardContentHeaders = ['Get started with React'];
const cardContentTexts = ['React makes it painless to create interactive UIs. Design simple views for each state in your application.'];
const cardContentLinks = ['reactjs.org'];
const cardContentRedirect = ['https://reactjs.org/'];


export default App;
