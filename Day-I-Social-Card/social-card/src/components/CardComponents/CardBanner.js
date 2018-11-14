import React from 'react';
import './Card.css';
import '../../App.css';

const CardBanner = () => {
  return (
    <a className="banner-container-wrapper" href="https://reactjs.org">
      <img
        alt="react logo"
        className="banner-img"
        src="https://ibin.co/3wnC6SgIOJud.png"
      />
    </a>
  );
};


// function CardBanner() {
//     return (
//       <React.Fragment>
//         <img src='https://ibin.co/3wnC6SgIOJud.png' alt="favicon" className='favicon-img'/>
//       </React.Fragment>
//     );
//   }


export default CardBanner;