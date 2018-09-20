import React from 'react';
import './Card.css';

const click = () => {
    window.open('https://reactjs.org/', '_blank');
}
const CardContent = () => {
    return (
        <div className="Card-Content" onClick={click}>
            <p className="bold">Get started with React</p>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <p className="gray">reactjs.org</p>
        </div>
    );
};

export default CardContent;