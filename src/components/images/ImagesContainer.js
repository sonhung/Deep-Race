import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getAllImages } from '../../actions/ImagesAction'
import CardImage from './CardImage';

class ImagesContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllImages();
    }

    render() {
        const {
            images: {
                allImages: {
                    images: imagesData = []
                } = {}
            } = {}
        } = this.props;

        return (
            <div>
                {
                    imagesData.map(image=>{
                        return <CardImage imageData={image}/>
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    images: state.images
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllImages
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesContainer);
