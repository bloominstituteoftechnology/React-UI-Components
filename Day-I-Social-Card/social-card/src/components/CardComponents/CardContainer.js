import React from 'react';
import './Card.css';
import '../../App.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
// function CardContainer() {
//     return (
//           <div class = "card-container">
//       <React.Fragment>
//           <CardBanner />;
//           <CardContent />;
//       </React.Fragment>
//           </div>
//     );
//   }
  
  const CardContainer = () => {
    return (
      <div className="banner-wrapper">
        <CardBanner />
        <CardContent />
      </div>
    );
  };
  export default CardContainer;
