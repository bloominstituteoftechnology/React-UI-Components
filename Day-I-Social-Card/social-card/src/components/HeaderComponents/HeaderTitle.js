import React from 'react';
import './Header.css';

// const HeaderTitle = () => {
//     return <h1>Lambda School</h1>;
// };

function HeaderTitle(props) {
    return (
      <React.Fragment>
        <h1 className="header">{props.title}</h1>
      </React.Fragment>
    );
  }


export default HeaderTitle;
// export default App;