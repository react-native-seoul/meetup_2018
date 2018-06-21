import 'react-native';
import * as React from 'react';
import Home from '../Home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { shallow, render } from 'enzyme';

describe('Intro', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Home />).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  describe('component test', () => {
    const wrapper = shallow(
      <Home />,
    );

    it('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
