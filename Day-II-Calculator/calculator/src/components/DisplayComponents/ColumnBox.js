import React, { Fragment } from 'react';
import Symbols from "./Symbols"; { /*import './ColumnBox.css';*/ }


const ColumnArr = [{
        name: 'Divide',
        symbolType: "/"
    },
    {
        name: 'Multiply',
        symbolType: 'X'

    },
    {
        name: 'Subtract',
        symbolType: "-"
    },
    {
        name: 'Add',
        symbolType: '+'
    },
    {
        name: 'Equals',
        symbolType: "="
    },
];

function ColumnBox(props) {
    return ( <
        Fragment >

        {
            ColumnArr.map((banana) => {
                return <Symbols symbol = { banana }
                />
            })
        } <
        /Fragment>

    );
}


export default ColumnBox;