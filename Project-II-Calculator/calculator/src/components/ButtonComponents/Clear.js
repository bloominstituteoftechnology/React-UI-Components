import React from 'react';
import './Button.css';

export class Clear extends React.Component {
    state = {
        lActions: [
            {char: "clear"}
        ]
    }

    render() {
        return (
            <div className="large">
                <div className="lgBtn">
                    {this.state.lActions[0].char}
                </div>  
            </div> 
        );
    }
}