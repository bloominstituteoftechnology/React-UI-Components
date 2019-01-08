import React from 'react';
import './Header.css';

/*  
    PASSABLE PROPS:
    imageSource - The link to the image to display.
    altText - The alt text to append to the image.
    link - If a value is passed in, converts the image to an anchor with this link.
*/

class ImageThumbnail extends React.Component {
    render() {
        let render = ( 
            <img className="image-thumbnail" src={this.props.imageSource} alt={this.props.altText}/>
        );

        if (this.props.link != null && this.props.link.length > 0)
            render = (
                <a href={this.props.link}>{render}</a>
            );
        
        return render;
    }
}

export default ImageThumbnail;
