import React from 'react';
import './App.css';
import './components/HeaderComponents/Header.css';

const ImageThumbnail = () => {
  return(<div>
    <img src="https://ibin.co/3whrpKSBbZ81.png" alt="react logo"></img>
  </div>)
}

const HeaderTitle = () => {
  return (<div>
    <h1> Lambda School</h1>
    <p>@LambdaSchool</p>
    <p> 26 Jan</p>
    </div>
    );
};

const HeaderContent = () => {
  return (<div>
    <p>Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
  </div>);
};

const HeaderContainer = () => {
  return (<div>
    <ImageThumbnail />
    <HeaderTitle />
    <HeaderContent />
  </div>)
}


const App = () => {
  return (
    <div>
      <HeaderContainer />
    </div>
  );
};

export default App;
