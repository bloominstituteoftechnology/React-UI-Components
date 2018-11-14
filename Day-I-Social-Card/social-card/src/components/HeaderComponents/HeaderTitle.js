import React from 'react';
import './Header.css';
import '../../App.css';
import moment from 'moment'
const time = moment();

// const HeaderTitle = () => {
//     return <h1>Lambda School</h1>;
// };

function HeaderTitle(props) {
    return (
      <React.Fragment>
        <h1 className="header-header">Lambda School <span className="header-span">@Lambda School {time.format('D MMM')} </span></h1>
      </React.Fragment>
    );
  }


export default HeaderTitle;
// export default App;