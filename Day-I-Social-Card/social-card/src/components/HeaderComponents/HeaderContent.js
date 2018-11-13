import React from 'react';
import './Header.css';
import '../../App.css';

function HeaderContent(props) {
    return (
        <React.Fragment>
          <p>Let's learn React by building simple interfaces with components. Don't try to over think it, just keep it simple and have fun. Once you feel comfortable using components, you are well on your way to mastering React!</p>
        </React.Fragment>
      );
  }

// const HeaderContent = () => {
//     return <p>Let's learn React by building simple interfaces with components. Don't try to over think it, just keep it simple and have fun. Once you feel comfortable using components, you are well on your way to mastering React!</p>;
// };

// export default App;
export default HeaderContent;