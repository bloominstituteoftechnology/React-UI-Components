import React from 'react';
import './Header.css';

class ImageThumbnail extends React.Component {
    render() {
        return <img src={this.props.src} />;
    }
}

export default ImageThumbnail;
