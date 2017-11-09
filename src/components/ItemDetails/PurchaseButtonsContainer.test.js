import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import PurchaseButtonsContainer from './PurchaseButtonsContainer';

describe('PurchaseButtonsContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PurchaseButtonsContainer />, div);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<PurchaseButtonsContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  const numbers = { one: '1', two: '2', zero: '0' };
  it('renders the right amount of purchase buttons', () => {
    // Render the PurchaseButtonsContainer
    const container0 = mount(
      <PurchaseButtonsContainer purchasingChannelCode={numbers.zero} />
    );
    const count0 = container0.find('PurchaseButton');
    expect(count0.length).toEqual(2);
    const container1 = mount(
      <PurchaseButtonsContainer purchasingChannelCode={numbers.one} />
    );
    const count1 = container1.find('PurchaseButton');
    expect(count1.length).toEqual(1);
    const container2 = mount(
      <PurchaseButtonsContainer purchasingChannelCode={numbers.two} />
    );
    const count2 = container2.find('PurchaseButton');
    expect(count2.length).toEqual(1);
  });
});
