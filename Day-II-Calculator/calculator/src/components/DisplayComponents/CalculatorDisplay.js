import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component {
    constructor (props) {
        super(props)
        this.state={}
    }
    render () {
        const string = this.props.data.join('');
        return ( <div className="display">
                   <p>{string}</p>
                 </div>
        );
    }
}

// class CalculatorDisplay extends React.Component {
//     constructor (props) {
//         super(props)
//     }
//     render () {
//         const string = this.props.data.join('');
//         return ( <div className="display">
//                    <p>{string}</p>
//                  </div>
//         );
//     }
// }

export default CalculatorDisplay;



// const CalculatorDisplay = () => {
//     return (
//         <div className="display">
//             <p>0</p>
//         </div>
//     )
// };