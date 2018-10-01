import React from 'react';
import './Card.css';
const CardContent = props => {
    return (
        <div className='cardContentBox'>
            <div className='cardContentTitle'>Get started with React</div>
            <div className='cardContentText'>React makes it painless to create interactive UIs.
            Design simple views for each state in your application.</div>
            <div className='cardContentLink'> reactjs.org</div>
        </div>
    );
};
 export default CardContent;