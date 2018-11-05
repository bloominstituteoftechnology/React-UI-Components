import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
  return <a href="https://www.reactjs.org" target="_blank" rel="noopener"> 
        <main>
          <section>
            <CardBanner source="https://ibin.co/3wnC6SgIOJud.png" />
            <div>
              <CardContent />
            </div>
          </section>
        </main>
      </a>;
}


export default CardContainer;