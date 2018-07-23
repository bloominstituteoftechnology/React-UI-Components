import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repost: 6,
            fav: 4,
        };
    }

    onClickComment = () => alert('No commenting functionality added yet! Oops!');
    onClickRepost = () => this.setState({repost: this.state.repost + 1});
    onClickFav = () => this.setState({fav: this.state.fav + 1});
    onClickMail = () => alert('No mailing functionality added yet! Oops!');

    render() {
        return (
            <footer>
                <div className="footer">
                    <span className="icon" onClick={this.onClickComment}>
                        <i className="far fa-comment"></i>
                    </span>
                    <span className="icon" onClick={this.onClickRepost}>
                        <i className="fas fa-sync"></i> &nbsp; <span className="stats-num">{this.state.repost}</span>
                    </span>
                    <span className="icon" onClick={this.onClickFav}>
                        <i className="far fa-heart"></i> &nbsp; <span className="stats-num">{this.state.fav}</span>
                    </span>
                    <span className="icon" onClick={this.onClickMail}>
                        <i className="far fa-envelope"></i>
                    </span>
                </div>
                <hr />
            </footer>
        );
    }
}

export default Footer;