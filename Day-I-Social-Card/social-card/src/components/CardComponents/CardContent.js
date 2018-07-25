import React from 'react';
import './Card.css';

const CardContent = () => {
    return  <div className = "card-content">
                <h3 className="mid-title">Get started with React</h3>
                <p className="mid-content">React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
                <a className="react-website" href="https://reactjs.org/">reactjs.org</a>
            </div>;
}

export default CardContent;