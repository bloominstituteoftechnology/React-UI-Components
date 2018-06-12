import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {

      return ( 
          < div className = 'container-fluid pointer'
          onClick = {
              () => {
                  window.location.href = 'http://www.reactjs.org'
              }
          } >
          <div className = "row d-flex">
          <div className = 'col-1 p-0' > 
          </div>
           <div className = 'col-11 p-0 card-main'>
          <CardBanner />
         <CardContent />
          </div>
          </div>
          </div>
    );
}
export default CardContainer;