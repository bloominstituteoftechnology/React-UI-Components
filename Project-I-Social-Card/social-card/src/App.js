import React from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import Footer from "./components/FooterComponents/Footer";
import logo from "./images/lambda_logo.jpg";

const profileHeader = {
  imageSource: logo,
  profileName: "Lambda School",
  profileHandle: "@LambdaSchool",
  date: "26 Jan",
  headerContent:
    "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!"
};

const postContent = {
  postImage:
    "https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png",
  postTitle: "Get started with React",
  postContent: "React makes it painless to create interactive UIs. Design simple views for each state in your application.",
  postLink: "reactjs.org"
};

const footerSymbols = {
  comment: <i className="far fa-comment footer-item" />,
  sync: <i className="fas fa-sync footer-item" />,
  like: <i className="far fa-heart footer-item" />,
  mail: <i className="far fa-envelope footer-item" />
};

// imageSource = { imageSource } profileName = { profileName } profileHandle = { profileHandle } date = { date } headerContent = { headerContent }


const App = () => {
  return (
    <div className="app">
      <HeaderContainer profile={profileHeader} />
      <CardContainer post={postContent} />
      <Footer symbols={footerSymbols} />
    </div>
  );
};

export default App;
