import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* import { MyComponent1 } from 'my-lib'; */
// or
import MyComponent1 from 'my-lib/components/MyComponent1';

export const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <MyComponent1 title="My title for component 1" />
        </div>
    );
};