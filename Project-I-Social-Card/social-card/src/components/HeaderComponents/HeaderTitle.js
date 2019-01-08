import React from 'react';
import './Header.css';

/*  
    PASSABLE PROPS:
    handle - The handle of the poster.
    name - The display name of the poster. If no value is passed, uses the handle for this value.
    date - If a value is passed, displays the posting date of the post.
    link - If a value is passed, converts the name and handle to anchor tags with this link.
*/

class HeaderTitle extends React.Component {
    render() {
        let name = this.props.name;
        if (name == null)
            name = this.props.handle;

        let nameTag = ( <h1 className="header-title-name">{name}</h1> );
        let handleTag = ( <h1 className="header-title-handle">{"@" + this.props.handle}</h1> );
        if  (this.props.link != null && this.props.link.length > 0) {
            nameTag = ( <a href={this.props.link}>{nameTag}</a> );
            handleTag = ( <a href={this.props.link}>{handleTag}</a> );
        }

        let dateTag = "";
        if  (this.props.date != null && this.props.date.length > 0)
            dateTag = ( <h1 className="header-title-date">{"· " + this.props.date}</h1> );

        return (
            <div className="header-title">
                {nameTag}
                {handleTag}
                {dateTag}
            </div>
        );
    }
}

export default HeaderTitle;
