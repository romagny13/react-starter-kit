import { assert } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Home from './HomePage';

function setup() {
      let props = {};
      return shallow(<Home {...props} />);

   /* let props = {};
    const renderer = new ShallowRenderer();
    renderer.render(<Home />);
    return renderer.getRenderOutput();*/
}

describe('Home', () => {

    it('Should fill fields', () => {
        const wrapper = setup();
        assert.equal(wrapper.find('h1').text(), 'Home');
    });

});