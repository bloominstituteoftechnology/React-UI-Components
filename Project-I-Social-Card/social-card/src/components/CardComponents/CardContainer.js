import React from 'react';
import './Card.css';

function CardContainer() {
    return (
        <div className='cardContainer'>
          <div className='react'>
            <img className='reactLogo' src='https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png' alt=''></img>
            <div className='cardContent'>
              <div class='title'>Get started with React</div>
              <div className='content'>React makes it painless to create interactive UIs.  Design 
                  simple views for each state in your application.
              </div>
              <span>reactjs.org</span>
            </div>
          </div>  
        </div>
    );
};

export default CardContainer;

// let button = document.querySelector('.reactLogo');

// button.addEventListener('click', (event) => {
//   event.target.href='http'
// });