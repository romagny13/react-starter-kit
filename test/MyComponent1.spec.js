import { assert } from 'chai';

import React from 'react';
import { mount, shallow } from 'enzyme';

import { MyComponent1 } from '../src/index';

describe('MyComponent1', () => {

    it('Should render', () => {     
        let props = {
            title: 'My title'
        };

        const wrapper = shallow(<MyComponent1  {...props} />);

        assert.equal('<div><h2>MyComponent 1</h2><p>My title</p></div>', wrapper.html());
    });

});
