import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SaveButtonsContainer from './SaveButtonsContainer';

describe('SaveButtonsContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SaveButtonsContainer />, div);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<SaveButtonsContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('performs actions', () => {
    // Render the SaveButtonsContainer
    const container = shallow(<SaveButtonsContainer />);
    const addToRegistrySpy = jest.spyOn(container.instance(), 'addToRegistry');
    container.instance().addToRegistry();
    expect(addToRegistrySpy).toHaveBeenCalled();
    const addToListSpy = jest.spyOn(container.instance(), 'addToList');
    container.instance().addToList();
    expect(addToListSpy).toHaveBeenCalled();
    const shareSpy = jest.spyOn(container.instance(), 'share');
    container.instance().share();
    expect(shareSpy).toHaveBeenCalled();
  });
});
