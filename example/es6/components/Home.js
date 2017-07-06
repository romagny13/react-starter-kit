import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MyComponent1 } from '../../../src/index';

export const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <MyComponent1 title="My title for component 1" />
        </div>
    );
};