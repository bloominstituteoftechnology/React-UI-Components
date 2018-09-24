import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="lowerContent reactLink" >
        
        <div>
              <a className='reactLinkStyle' href="https://reactjs.org/"> 
              
              <h5 className='ReactHeader'>Get Started With React</h5>


            <p className="lowerPara">
                
                React makes it painless to create interactive UIs. Design simple views for each state in your application.
            </p>
            
            
            
            </a>

            
        </div>
      
       
        </div>
    )
}

// let link = document.querySelector(".lowerContent");
// console.log(link);
// link.addEventListener('click', function(){
//     console.log('hi');
// })



export default CardContent ;