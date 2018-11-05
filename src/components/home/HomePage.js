import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
// import { fetchData } from '../../actions/fetchData'
import ImagesContainner from '../images/ImagesContainer';

class HomePage extends Component {
    render() {
        return (
            <div>
                home page ne`
                <ImagesContainner/>
            </div>
        );
    }
}

// const mapStateToProps = (state) => ({
//     state
// });

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         fetchData
//     }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default HomePage;
