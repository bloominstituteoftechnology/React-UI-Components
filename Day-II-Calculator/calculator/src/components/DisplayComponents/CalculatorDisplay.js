import React from 'react';
import './Display.css';


class CalculatorDisplay extends React.Component {
   
    state = {
        numdisplay: 0
    }

    render(props) {
        return (
            <div className="display">
                <h1 class="num-display">{this.state.numdisplay}</h1>
            </div>
        )
    }

}

export default CalculatorDisplay;
