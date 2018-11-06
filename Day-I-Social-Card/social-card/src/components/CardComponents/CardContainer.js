import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer(props) {

  return (

    <div className="card-content" onClick={() => window.location.href = "https://www.reactjs.org"}>

      <CardBanner src="https://ibin.co/3wnC6SgIOJud.png" />
      <CardContent title="Get started with React" content="React makes it painless to create interactive UIs. Design simple views for each state in your application." href="reactjs.org"/>

    </div>

  );

}

export default CardContainer;
