import React from 'react';
import './App.css';

const post = {
    header: {name: "Lambda School",
             username: "@LambdaSchool",
             img: "https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png",
             date: "26 jan",
             content: "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!"},
    card: {img: "https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png",
           title: "Get started with React",
           content: "React makes it painless to create interactive UIs. Design simple views for each state in your application",
           url: "https://www.reactjs.org"},
    shares: 6,
    likes: 4,
};

class Post extends React.Component {
    render() {
        return <div><h2>{post.header.name}</h2><p>{post.header.content}</p></div>;
    }
}

const App = () => {
  return (
      <Post />
  );
};

export default App;
