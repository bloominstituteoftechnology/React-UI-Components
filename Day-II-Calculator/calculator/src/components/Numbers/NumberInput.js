import React from 'react';
import './Number.css';

const MyClear = props => {
    return <button className={props.clear}>{props.name}</button>
}

const MyOperand = props => {
    return <button className={props.operand}>{props.name}</button>
}

const MyInput = props => {
    return <button className={props.input}>{props.name}</button>
}

const NumberInput = () => {
    return <div className='numbers'>

    <div className='row'>
    {/*<button className='clear'>clear</button>*/}
    <MyClear clear='clear' name='clear' />
    <button className='operand'><i class="fas fa-divide"></i></button>
    </div>

    <div className='row'>
    {/*<button className='input'>7</button>*/}
    <MyInput input='input' name='7' />
    {/*<button className='input'>8</button>*/}
    <MyInput input='input' name='8' />
    {/*<button className='input'>9</button>*/}
    <MyInput input='input' name='9' />
    <button className='operand'><i class="fa fa-times" aria-hidden="true"></i></button>
    </div>

    <div className='row'>
    {/*<button className='input'>4</button>*/}
    <MyInput input='input' name='4' />
    {/*<button className='input'>5</button>*/}
    <MyInput input='input' name='5' />
    {/*<button className='input'>6</button>*/}
    <MyInput input='input' name='6' />
    <button className='operand'><i class="fa fa-minus" aria-hidden="true"></i></button>
    </div>

    <div className='row'>
    {/*<button className='input'>1</button>*/}
    <MyInput input='input' name='1' />
    {/*<button className='input'>2</button>*/}
    <MyInput input='input' name='2' />
    {/*<button className='input'>3</button>*/}
    <MyInput input='input' name='3' />
    <button className='operand'><i class="fa fa-plus" aria-hidden="true"></i></button>
    </div>

    <div className='row'>
    {/*<button className='clear'>0</button>*/}
    <MyClear clear='clear' name='0' />
    <button className='operand'><i class="fas fa-equals"></i></button>
    </div>

    </div>
}

export default NumberInput;