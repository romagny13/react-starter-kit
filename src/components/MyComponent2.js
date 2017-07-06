import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MyComponent2 extends Component {
    render() {
        return (
            <div>
                <h2>MyComponent 2</h2>
                <p>{this.props.title}</p>
            </div>
        );
    }
}
MyComponent2.propTypes = {
    title: PropTypes.string.isRequired
};