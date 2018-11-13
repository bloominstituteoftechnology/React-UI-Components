import React, { Component } from 'react';
import './Footer.css'
class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <img className="footerimages" alt="comment" src="https://ibin.co/4MU0FZncyWKf.png" />
                <div className="refresh">
                <img className="footerimages" alt="refresh" src="https://ibin.co/4MU17u0XYyVm.png" />
                <h3>6</h3>
                </div>
                <div className="heart">
                <img className="footerimages" alt="like" src="https://ibin.co/4MU1MGSBT57K.png"/>
                <h3>4</h3>
                </div>
            <img className="footerimages" alt="message" src="https://ibin.co/4MU1WsbpkIgE.png"/>
            </div>
        )
    };
}

export default Footer