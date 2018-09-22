import React from 'react';
import './Display.css';
import App from '../../App';

class CalculatorDisplay extends React.Component {
    constructor () {
        super()
        this.state={}
    }
    render () {
        // const string = this.props.data.join('')
        return ( <div className="display">
                    {/* {string} */}
                   <p> 'I do maths'</p>
                 </div>
        );
    }
}

export default CalculatorDisplay;



// const CalculatorDisplay = () => {
//     return (
//         <div className="display">
//             <p>0</p>
//         </div>
//     )
// };