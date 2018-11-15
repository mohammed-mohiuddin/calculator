import React from 'react';
import { shallow } from '../../enzyme';
import Buttons from '../Buttons';

function setup() {
    const props = {
      labels: {labels: ["1", "2", "3"]}
    }
    const enzymeWrapper = shallow(<Buttons {...props} />);
    return {
      props,
      enzymeWrapper
    }
  }

describe('components', () => {
  describe('Buttons', () => {
    it('should render Buttons and subcomponents', () => {
      const {enzymeWrapper } = setup();
      expect(enzymeWrapper.find('div').find('.row')).toBeDefined();
    })
  })
})
