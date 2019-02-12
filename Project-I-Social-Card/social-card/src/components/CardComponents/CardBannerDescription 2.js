import React from 'react';

const CardBannerDescription = () => {
    return(
        <div className="card-txt-container">
            <h4 className="card-header">
                Get started with React
            </h4>
            <p className="card-txt">
                React makes it painless to create interactive UIs. Design simple views for each state in your application.
            </p>
            <p className="card-link">
                <a href="https://reactjs.org/" className="card-link">reactjs.org</a>
            </p>
        </div>
    );
}

export default CardBannerDescription;