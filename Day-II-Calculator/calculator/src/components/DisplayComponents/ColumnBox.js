import React, { Fragment } from 'react';
import Symbols from "./Symbols"
{/*import './ColumnBox.css';*/ }


const ColumnArr = [
    { 
        name: 'Divide',
        symbol: "/"
    },
    {
        name: 'Multiply',
        symbol: 'X'

    },
    {
        name: 'Subtract',
        symbol: "-"
    },
    {
        name: 'Add',
        symbol: '+'
    },
    {
        name: 'Equals',
        symbol: "="
    },
];

function ColumnBox(props) {
    return (
        <Fragment>

            {ColumnArr.map((banana) => {
                return <Symbols symbol={banana}  />
            })}
        </Fragment>

    );
}


export default ColumnBox;