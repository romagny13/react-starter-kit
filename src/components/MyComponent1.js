import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MyComponent1 extends Component {
    render() {
        return (
            <div>
                <h2>MyComponent 1</h2>
                <p>{this.props.title}</p>
            </div>
        );
    }
}
MyComponent1.propTypes = {
    title: PropTypes.string.isRequired
};
