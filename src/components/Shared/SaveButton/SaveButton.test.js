import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import SaveButton from './index';

describe('SaveButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SaveButton />, div);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<SaveButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('handles props', () => {
    const saveButton = mount(
      <SaveButton action={console.log('test')} buttonText="test" />
    );
    saveButton.find('button').simulate('click');
    // TODO expect click to fire
    expect(saveButton.text()).toEqual('test');
  });
});
