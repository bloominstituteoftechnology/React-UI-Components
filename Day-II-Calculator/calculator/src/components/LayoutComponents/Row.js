import React from 'react'
import './Layout.css'

function Row ({children}) {
    return (
        <div className="row">
            {children}
        </div>
    )
}

export default Row