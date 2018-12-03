import React from 'react';
import './Display.css';


class DisplayComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: 0
        }
    }

    render() {
        return (
            <div className="total-container">
                {this.state.display}
            </div>
        )
    }
}

export default DisplayComponent;