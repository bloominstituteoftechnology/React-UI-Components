import React from 'react';
import "./SymbolsBoxs.css";


function Symbols(props){
    return(
        <div className="SymbolsBoxs" >
            <p>{props.symbol.symbol}</p>
            {/*<p></p>*/}
            
        </div>


    );
}


export default Symbols;
