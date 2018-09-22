import React from 'react';
import './Card.css';

const CardContent = (props) =>{
    return(
        <div className = "card-content">
            <a href ="reactjs.org">    
                <h2>Get started with React</h2>
                <p>React is soooooo neat. I love it a whole bunch.</p>
                <p> It's going to take some practice, but I will get the hang of it.</p>
                <p className ="react-site">reactjs.org</p>
            </a>
        </div>
    )
}

export default CardContent;
