import React from 'react';
import './Footer.css';

// Create a <Footer/> component that pulls in the icons and displays them properly.
// Build out the functionality so that a user can click on the icons and have them react to events.

function Footer(){
    return (
            <footer className="footer">   
                <span className="clickable">
                <div className="iconContainer">
                        <i class="fa fa-comment"></i>
                        <i class="fa fa-refresh">6</i>
                        <i class="fa fa-heart">4</i>
                        <i class="fa fa-envelope"></i>
                    </div>     
                </span>                                                            
            </footer>

    );
}

export default Footer;
