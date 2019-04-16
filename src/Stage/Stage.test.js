import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Stage from './Stage';

describe('Stage component', () => {
  it('renders stage component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI with data', () => {
    const tree = renderer
      .create(<Stage name={'hello'} avatar={'world'} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
