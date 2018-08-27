import React from 'react';
import moment from 'moment';

export default function(){
    return (
        <span className="date-posted" href="#" > &middot; {moment().format('Do MMM')} </span>
    )
}