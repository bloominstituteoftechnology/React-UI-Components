import React from 'react';
import './Display.css';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        console.log(this.props);
        return  (
            <div className = 'display'> 
                <p>0</p>
            </div>
        );
    }
}

export default Display;