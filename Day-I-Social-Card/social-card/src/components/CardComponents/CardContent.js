import React from 'react';
import './Card.css';

const CardContent = props => {
    return (
        <section>
            <h2>Get started with React</h2>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <p class="fakeHyperlink">reactjs.org</p>
        </section>
    );
}

export default CardContent;