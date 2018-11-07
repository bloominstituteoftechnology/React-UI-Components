import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
    return (
      <React.Fragment>
          <div class="card-container">
                
            <div className="banner-content">
                <CardBanner/>
                <CardContent title="Get Started With React" />
                <CardContent content="React makes it painless to create interactive UIs. Design simple views for each state in your application." />
            </div>
          </div>
      </React.Fragment>
    );
  }
  
  export default CardContainer;
