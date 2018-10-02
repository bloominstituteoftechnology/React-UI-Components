import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
// const App = () => {
//     return ( <
//         div >
//         APP <
//         /div>
//     );
// };

const App = () => {
    return (
        <div className='wrapper'>
            <ActionButton style="clear-button" text="clear" />
        </div>
    );
};

export default App;