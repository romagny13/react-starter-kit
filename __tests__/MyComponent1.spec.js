import React from 'react';
import { shallow } from 'enzyme';

import { MyComponent1 } from '../src/index';

describe('MyComponent1', () => {

    it('Should render', () => {     
        let props = {
            title: 'My title'
        };

        const wrapper = shallow(<MyComponent1  {...props} />);

        expect(wrapper.html()).toEqual('<div><h2>MyComponent 1</h2><p>My title</p></div>');
    });

});
