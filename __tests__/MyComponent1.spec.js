import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { MyComponent1 } from '../src/index';

configure({ adapter: new Adapter() });

describe('MyComponent1', () => {

    it('Should render', () => {
        let props = {
            message: 'My message'
        };

        const wrapper = shallow(<MyComponent1  {...props} />);

        expect(wrapper.html()).toEqual('<div><h2>My Component 1</h2><p>My message</p></div>');
    });

});
