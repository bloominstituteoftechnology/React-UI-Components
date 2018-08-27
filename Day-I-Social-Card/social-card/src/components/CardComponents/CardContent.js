import React from 'react';
import './Card.css';


const CardContent = () => {
    return(
        <div className="cardcontent" >
            
                <div className="cardHeaderParent" >
                    <p className="cardHeader">Get Started With React</p>
                </div>
                <div className="cardBodyParent" >
                    <p className="cardBody">React makes it painless to create interactive UI's. Design simple views for each state in your application.</p>
                </div>
                <div className="cardBody" >
                    <p className="linked" >reactjs.org</p>
                </div>
            
        </div>
    );
};

export default CardContent;