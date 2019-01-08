import React from 'react';

/*  
    PASSABLE PROPS:
    onClick - Code called when the button is clicked.
    children (implicit) - Elements nested as children of this element.
*/

class FooterButton extends React.Component {
    render() {
        return (
            <button className="footer-button" type="button" onClick={this.props.onClick}>
                {this.props.children}
            </button>
        )
    }
}

export default FooterButton;
