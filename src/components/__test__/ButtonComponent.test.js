import React from 'react';
import { shallow } from '../../enzyme';
import ConnectedCreateButton, {CreateButton} from '../ButtonComponent';

function setup() {
  const props = {
    label: "1"
  }
  const enzymeWrapper = shallow(<CreateButton {...props} />);
  return {
    props,
    enzymeWrapper
  }
}
describe('components', () => {
  describe('CreateButton', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('Button').hasClass('border')).toBe(true);
      expect(enzymeWrapper.find('Button').hasClass('dark')).toBe(true);
      expect(enzymeWrapper.find('Button').hasClass('w-100')).toBe(true);
      expect(enzymeWrapper.find('Button').hasClass('rounded-0')).toBe(true);
      expect(enzymeWrapper.find('[color="success"]')).toBeDefined();
      expect(enzymeWrapper.find('[size="lg"]')).toBeDefined();
    })
  })
})