import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import createStore from 'redux-mock-store';
import { shallowWithIntl } from '../../../intl-enzyme-test-helper.js';

import Hello from '../Hello.jsx';
import en from '../../locale/en.json';

describe('<Hello />', () => { 
  it('renders the app component', () => {
    const wrapper = shallowWithIntl(<Hello />).dive();
    expect(wrapper.find('.test').text()).toEqual(en['app.greetings']);
  })
});
