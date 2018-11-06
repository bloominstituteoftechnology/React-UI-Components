import React from 'react';
import './Card.css';
import Rere from 'https://reactjs.org/';


function CardContent(props) {
    return (
        <div >
            <h1 className="card title" >Get Started With React</h1>
                <p className="card Para" >React makes it painless to create interactive UIs. Design simple views for each state in your application</p>

                <h5 className="card titleb" ><a href={Rere}>Reactjs.org</a></h5>

        </div>
    );
}

export default CardContent;
