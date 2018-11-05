import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getAllImages } from '../../actions/ImagesAction'

class ImagesContainer extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getAllImages();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                image day nha
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
