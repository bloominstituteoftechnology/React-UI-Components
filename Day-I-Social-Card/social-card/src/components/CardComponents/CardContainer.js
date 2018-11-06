import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
  return (
    <main>
      <a href="https://www.reactjs.org">
        <section>
          <CardBanner source="https://ibin.co/3wnC6SgIOJud.png" />
          <div>
            <CardContent />
          </div>
        </section>
      </a>
    </main>
  );
}


export default CardContainer;