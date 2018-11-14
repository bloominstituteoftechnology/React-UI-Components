import React from 'react';
import HeaderContent from './HeaderContent';
import './Header.css';
import '../../App.css';
import moment from 'moment'
const time = moment();



// function HeaderTitle(props) {
//     return (
//       <React.Fragment>
//         <h1 className="header-header">Lambda School <span className="header-span">@Lambda School {time.format('D MMM')} </span></h1>
//       </React.Fragment>
//     );
//   }

  const HeaderTitle = () => {
    return (
      <div className="header-title-wrapper">
        <div className="header-title">
          Lambda School
          <span className="time-stamp">{time.format('MMM Do ')}</span>
          <HeaderContent />
        </div>
      </div>
    );
  };


export default HeaderTitle;
// export default App;