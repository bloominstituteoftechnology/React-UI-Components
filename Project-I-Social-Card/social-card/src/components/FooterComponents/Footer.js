import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {share: 0, fav: 0};
    }

    shareValue = () => {
        const sValue = this.state.share +1
        this.setState({share: sValue})
        console.log(this.state.share)
    }

    favValue = () => {
        const fValue = this.state.fav +1
        this.setState({fav: fValue})
        console.log(this.state.fav)
    }

    render(){
        return(
            <div className = 'footerIcons'>
                <i className="far fa-comment"></i>
                <i className="fas fa-sync" onClick={this.shareValue}> {this.state.share}</i>
                <i className="far fa-heart" onClick={this.favValue}> {this.state.fav}</i>
                <i className="far fa-envelope"></i>
            </div>
        )
    }
}

export default Footer;