import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent2 extends Component {
    render() {
        return (
            <div>
                <h2>MyComponent 2</h2>
                <p>{this.props.message}</p>
            </div>
        );
    }
}
MyComponent2.propTypes = {
    message: PropTypes.string.isRequired
};
export default MyComponent2;