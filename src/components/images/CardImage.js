import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './CardImage.css';

class CardImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            imageData: {
                url,
                title
            } = {}
        } = this.props;

        return (
            <Col md={3} sm={6} className="cardImage">
                <img src={url} className="imgThumbnail" />
                <p>{title}</p>
            </Col>
        );
    }
}

export default CardImage;
