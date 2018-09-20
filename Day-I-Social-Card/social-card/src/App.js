import React from 'react';
import './App.css';
import './components/HeaderComponents/Header.css';

const HeaderContainer = () => {
  return (<div>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
    <ImageThumbnail />
    <HeaderTitle />
    <HeaderContent />
  </div>);
};

const ImageThumbnail = () => {
  return(<div>
    <img src="https://ibin.co/3whrpKSBbZ81.png" alt="Lambda School Logo"></img>
  </div>);
};

const HeaderTitle = () => {
  return (<div>
    <h1 className="ht-h1"> Lambda School</h1>
    <p>@LambdaSchool</p>
    <p>&#183; 26 Jan</p>
    </div>
    );
};

const HeaderContent = () => {
  return (<div>
    <p>Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
  </div>);
};

const CardContainer = () => {
  return (<div>
    <a href="https://www.reactjs.org">
      <CardBanner />
      <CardContent />
    </a>
  </div>);
};

const CardBanner = () => {
  return (<div>
    <img src="https://ibin.co/3wnC6SgIOJud.png" alt ="React Logo"></img>
  </div>);
};

const CardContent = () => {
  return (<div>
    <h3>Get started with React</h3>
    <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
    <p>reactjs.org</p>
  </div>
  );
};

const Footer = () => {
  return (<div>
    <a href="#">
      <i class="far fa-comment"></i>
    </a>
    <a href="#">
      <i class="fas fa-sync"></i>
    </a>
    <a href="#">
      <i class="far fa-heart"></i>
    </a>
    <a href="#">
      <i class="far fa-envelope"></i>
    </a>
  </div>);
};

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
