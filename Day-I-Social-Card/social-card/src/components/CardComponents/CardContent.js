import React from 'react';
import './Card.css';
import CardHeader from './CardHeader';
import Website from './Website';




        const CardContent = () => {
            return (
              <div className='cardContent'>
              <CardHeader />
            <p>
               There are only two ways to live your life.
               One is as though nothing is a miracle. The other is
               as though everything is a miracle.
            </p>
            <Website />
            </div>
            );
          };

          export default CardContent;
