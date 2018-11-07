import React, { Fragment } from 'react';
import Numbers from "./Numbers"



const NumberArr = [
    {
        name: 'Clear',
        Digits: "clear"
    },
    {
        name: 'Nine',
        Digits: '9'

    },
    {
        name: 'eight',
        Digits: "8"
    },
    {
        name: 'seven',
        Digits: '7'
    },
    {
        name: 'Six',
        Digits: "6"
    },
    {
        name: 'Five',
        Digits: "5"
    },
    {
        name: 'Four',
        Digits: '4'

    },
    {
        name: 'Three',
        Digits: "3"
    },
    {
        name: 'Two',
        Digits: '2'
    },
    {
        name: 'One',
        Digits: "1"
    },
    {
        name: 'Zero',
        Digits: "0"
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