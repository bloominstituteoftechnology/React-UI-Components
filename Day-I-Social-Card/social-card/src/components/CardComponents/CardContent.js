import React from 'react';
import './Card.css';


const CardContent = (props) => {
    return (
        <section className='card-content-container'>
            <p className='title'>Get started with React</p>
            <section className='paragraph'>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application</p>
            </section>
            <p className='tag'>reactjs.org</p>
        </section>
    );
};

export default CardContent;