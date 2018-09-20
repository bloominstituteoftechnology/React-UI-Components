import React from 'react';
import './Card.css';


const CardContent = (props) => {
    return (
        <section>
            <p className='title'>Get started with React</p>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application</p>
            <p className='tag'>reactjs.org</p>
        </section>
    );
};

export default CardContent;