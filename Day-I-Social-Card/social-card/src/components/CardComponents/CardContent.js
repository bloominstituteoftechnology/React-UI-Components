import React from 'react';
import './Card.css';

const Header = () => <h3>Get started with React</h3>;
const Content = () => <p>React makes it painless to create interactive UIs.  Design simple views for each state in your application.</p>;
const SiteAddress = () => <h5>reactjs.org</h5>;
const CardContent = () => {
    return <div className='card-content'>{Header}, {Content}, {SiteAddress}</div>;
};

export default CardContent;