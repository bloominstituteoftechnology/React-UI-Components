import React, { Fragment } from 'react';
import Numbers from "./Numbers"



const NumberArr = [
    {
        name: 'Clear',
        symbol: "clear"
    },
    {
        name: 'Nine',
        symbol: '9'

    },
    {
        name: 'eight',
        symbol: "8"
    },
    {
        name: 'seven',
        symbol: '7'
    },
    {
        name: 'Six',
        symbol: "6"
    },
    {
        name: 'Five',
        symbol: "5"
    },
    {
        name: 'Four',
        symbol: '4'

    },
    {
        name: 'Three',
        symbol: "3"
    },
    {
        name: 'Two',
        symbol: '2'
    },
    {
        name: 'One',
        symbol: "1"
    },
    {
        name: 'Zero',
        symbol: "0"
    },
];

function NumbersBox(props) {
    return (
        <Fragment>

            {NumberArr.map((banana) => {
                return <Numbers symbol={banana} />
            })}
        </Fragment>

    );
}


export default NumbersBox;