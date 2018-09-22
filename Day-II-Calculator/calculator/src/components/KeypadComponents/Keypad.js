import React from 'react';
import './Keypad.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/NumberButton';
let numberArr = [];


class Keypad extends React.Component {


    render() {
    return (
        
        <div className = 'calculatorgrid'>
        <div className = 'actionrow'><div  className='column' ><NumberButton buttonStyle={'long'} text={'Clear'} /></div><div  className='column' ><NumberButton buttonStyle={'number'} text={'/'} /></div></div>
        <div className = 'row'><div  className='column' ><NumberButton buttonStyle={'number'} text={'7'}/></div><div  className='column' ><NumberButton buttonStyle={'number'} text={'8'} /></div><div  className='column' ><NumberButton buttonStyle={'number'} text={'9'} /></div><div  className='column' ><NumberButton buttonStyle={'number'} text={'x'} /></div></div>
        <div className = 'row'><div  className='column' ><NumberButton buttonStyle={'number'} text={'4'} /></div><div  className='column' ><NumberButton buttonStyle={'number'} text={'5'} /></div><div  className='column' ><NumberButton buttonStyle={'number'} text={'6'} /></div><div  className='column' ><NumberButton buttonStyle={'number'} text={'-'} /></div></div>
        <div className = 'row'><div  className='column' ><NumberButton buttonStyle={'number'} text={'1'} /></div><div  className='column' ><NumberButton buttonStyle={'number'} text={'2'} /></div><div  className='column' ><NumberButton buttonStyle={'number'} text={'3'} /></div><div  className='column' ><NumberButton buttonStyle={'number'} text={'+'} /></div></div>
        <div className = 'actionrow'><div  className='column' ><NumberButton buttonStyle={'long'} text={'0'} /></div><div  className='column' ><NumberButton buttonStyle={'number'} text={'='} /></div></div>
        
        
        </div>
    )
}
}



export default Keypad;