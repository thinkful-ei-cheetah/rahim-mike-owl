import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StageList from './StageList';
import store from '../STORE';

describe('StageList component', () => {
  it('should render without crashiing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StageList store={store} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders UI with data', () => {
    const tree = renderer.create(<StageList store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
