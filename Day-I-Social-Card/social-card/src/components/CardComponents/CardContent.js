import React from 'react';
import './Card.css';

const Header = () => <h3>Get started with React</h3>;
const Content = () => <p>React makes it painless to create interactive UIs.  Design simple views for each state in your application.</p>;
const CardContent = () => (
    <div className='card-content'>
        <Header />
        <Content />
        <a href="http://reactjs.org" className='card-content link'>reactjs.org</a>    
    </div>
);

export default CardContent;