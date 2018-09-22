import React from 'react';
import './Footer.css';


class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            reload: 0
        }
    }

    onClick = () => {
        this.setState({
            reload: this.state.reload + 1
        });
    }

    render(){
        return (
            <div className="icons">
            <i className="far fa-comment"></i>
            <i className="fas fa-sync-alt" onClick={this.onClick}>{this.state.reload}</i>
            <i className="far fa-heart">4</i>
            <i className="far fa-envelope"></i>
        </div>
        )
    }
}
export default Footer;