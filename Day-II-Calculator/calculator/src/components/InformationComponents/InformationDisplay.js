import React from 'react';
import './InformationDisplay.css';

const InformationDisplay = () => {
    return(
        <div className="information">
            <h2> Here are some features that the calculator currently support:</h2>
            <ul>
                <li>Prevents multiple operation buttons from being clicked.</li>
                <li>Floating point calculations are supported.</li>
                <li>Pressing equal multiple times won't break the calculator.</li>
                <li>Result remains to be in use for next calculation.</li>
            </ul>
            <h2> Here are some features that need to be implemented: </h2>
            <ul>
                <li>Better responsiveness to prevent overflow in display.</li>
                <li>Prevent multiple decimal points from breaking calculator.</li>
            </ul>
            <p>Follow the updates <a href="https://github.com/junhyukee/React-UI-Components">here!</a></p>
        </div>
    );
}

export default InformationDisplay;