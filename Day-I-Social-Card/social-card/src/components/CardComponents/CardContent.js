import React from 'react';
import './Card.css';
import '../../App.css';

// function CardContent(props) {
//     return (
//         <React.Fragment>
//           <h1 className="header">Get Started with React</h1>
//           <p className="header" id="para">React makes it painless to create interactive UIs. Design simple views for each state in your application</p>
//         </React.Fragment>
//       );
//   }

  const CardContent = () => {
    return (
      <div className="banner-bottom">
        <p className="banner-content">Get started with React</p>
        <p className="banner-content">
          React makes it painless to make interactive UI's. Design simple views
          for each state in your application.
        </p>
        <a
          href="http://reactjs.org"
          className="banner-content header-content link"
        >
          reactjs.org
        </a>
      </div>
    );
  };

export default CardContent;