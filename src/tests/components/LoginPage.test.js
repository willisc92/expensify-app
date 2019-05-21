import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';
import React from 'react';

test('Should Render LoginPage', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});