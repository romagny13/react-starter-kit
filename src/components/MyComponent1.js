import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent1 extends Component {
    state = {
        title: 'My Component 1'
    }
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <p>{this.props.message}</p>
            </div>
        );
    }
}
MyComponent1.propTypes = {
    message: PropTypes.string.isRequired
};
export default MyComponent1;