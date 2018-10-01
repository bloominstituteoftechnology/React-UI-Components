import React from 'react';
import './Card.css';

const CardContent = props => {
    return (
        <div className="card-content">
            <h3>Get Started with React</h3>
            <p>For this project you're not going to be given any tips on how to break down the image file into components. Now that you've had some practice with the social card, this should be something you can start doing on your own.</p>
            <h3>reactjs.org</h3>
        </div>
    );
}

export default CardContent;