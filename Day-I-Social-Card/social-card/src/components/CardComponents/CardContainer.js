import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = () => {

    return(
        
        <div className="card-container">
         <a className="card-link" href="https://www.reactjs.org/" target="_blank">
            <div className="card-box">
           
                <CardBanner src={"https://ibin.co/3wnC6SgIOJud.png"} />
                <CardContent cardTitle={"Get started with React"} cardLink={"https://www.reactjs.org"} cardContent={"React makes it painless to create interactive UIs. Design simple views for each state in your application."} />
            </div>
            </a>
       
        </div>
    );
}


export default CardContainer;