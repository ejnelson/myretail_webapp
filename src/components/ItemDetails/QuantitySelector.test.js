import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import QuantitySelector from './QuantitySelector';

describe('QuantitySelector', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<QuantitySelector />, div);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<QuantitySelector />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('increments and decrements correctly', () => {
    // Render the QuantitySelector
    const selector = shallow(<QuantitySelector />);

    selector.find('.increment').simulate('click');
    expect(selector.text()).toEqual('quantity:2');
    selector.find('.decrement').simulate('click');
    expect(selector.text()).toEqual('quantity:1');
    selector.find('.decrement').simulate('click');
    expect(selector.text()).toEqual('quantity:1');
  });
});
