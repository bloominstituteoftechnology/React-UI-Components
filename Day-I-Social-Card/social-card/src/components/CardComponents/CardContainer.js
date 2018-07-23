import React from 'react';
import './Card.css';
import { CardBanner } from "../CardComponents/CardBanner";
import { CardContent } from "../CardComponents/CardContent";


export const CardContainer = () =>{
return (<div className="CardContainer"><CardBanner /><CardContent /></div>);
}