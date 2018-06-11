import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div class="card-content-container">
            <div class = "title">Get started with React</div>
            <p class="content">React makes it paineless to create interactive Uls.
                Design simple views for each state in your application.
            </p>
            <p class = "link">reactjs.org</p>
        </div>
    )
}

export default CardContent;