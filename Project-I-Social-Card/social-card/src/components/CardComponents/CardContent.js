import React from 'react';
import './Card.css';


/*
banner-bottom = cardContentContain
banner-content = cardContent
<a href="https://www.reactjs.org" className="banner-content header-content link"
<a href="https://www.reactjs.org">
*/
function CardContent() {
    return (
        <div className="banner-bottom">
            <p className="banner-content">
                Get started with React
            </p>
            <p className="banner-content">
                React makes it painless to make interactive UI's. Design simple views
                for each state in your application.
            </p>
            <a href="https://www.reactjs.org" className="banner-content header-content link">
                reactjs.org
            </a>
        </div>
    );
}

export default CardContent;