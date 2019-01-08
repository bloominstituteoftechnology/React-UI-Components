import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

/*  
    PASSABLE PROPS:
    handle - The handle of the poster.
    thumbnail - The link to the thumbnail image.
    content - The text content to display.
    name - The display name of the poster. If no value is passed, uses the handle for this value.
    date - If a value is passed, displays the posting date of the post.
    link - If a value is passed, converts the name and handle to anchor tags with this link.
*/

class HeaderContainer extends React.Component {
    render() {
        return (
            <div className="header">
                <ImageThumbnail 
                    imageSource={this.props.thumbnail} 
                    altText={"Thumbnail of " + this.props.handle} 
                    link={this.props.link} 
                />
                <div className="header-textcontainer">
                    <HeaderTitle 
                        handle={this.props.handle} 
                        name={this.props.name} 
                        date={this.props.date} 
                        link={this.props.link}
                    />
                    <HeaderContent content={this.props.content} />
                </div>
            </div>
        );
    }
}

export default HeaderContainer;
