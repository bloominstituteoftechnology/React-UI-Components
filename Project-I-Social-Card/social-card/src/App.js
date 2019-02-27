import React from "react";
import "./App.css";

// Components
import Header from "./components/HeaderComponents/Header";
import Card from "./components/CardComponents/Card";

const App = () => {
  return (
    <div className="apptainer">
      <Header
        headerTitle="Lambda School"
        headerSubtitle="@LambdaSchool · 26 jan"
        thumbnailImage="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"
        headerContent="Let's learn React by buyilding simple interfaces with component Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering REACT!"
      />
      <Card
        cardLink="https://reactjs.org"
        bannerImage="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"
        bannerAlt="React.js logo"
        cardTitle="Get started with React"
        cardContent="React makes it painless to create interactive UIs. Design simple views for each state in your application."
      />
    </div>
  );
};

export default App;
