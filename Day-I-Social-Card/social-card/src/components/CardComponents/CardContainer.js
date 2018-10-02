import React from 'react';
import ReactDOM from 'react-dom';
import './Card.css';
import CardThumbnail from './CardBanner';
import CardContent from './CardContent';

const CardContainer =()=>{
    return(
        <div onclick="myfunction()" class="card-container">
            <span>
            <CardThumbnail/>
            </span>
            <div><CardContent/></div>
        </div>
    );
}

ReactDOM.render(<CardThumbnail/>, document.getElementById('root'));
export default CardContainer;