import React from 'react';
import "./SymbolsBoxs.css";


function Numbers(props) {
    return (
        <div className="NumbersBoxs" >
            <p>{props.symbol.symbol}</p>
            {/*<p></p>*/}

        </div>


    );
}


export default Numbers;
