import React from 'react';
import { shallow } from 'enzyme';

import CustomCrm from '../CustomCrm/CustomCrm';

describe('CustomTaskListComponent', () => {
  it('should render demo component', () => {
    const props = {
      showCrm: true,
      setShowCrm: () => undefined,
      uri: "https://bing.com"
    };
    const wrapper = shallow(<CustomCrm {...props}/>);
    expect(wrapper.render().text()).toMatch('This is a dismissible demo component');
  });
});
