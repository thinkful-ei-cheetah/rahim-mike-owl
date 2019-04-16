import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ParticipantList from './ParticipantList';
import store from '../store';

describe('Participant List Component', () => {
  it('renders successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ParticipantList store={store} />,
      div
    )
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders a list of participants', () => {
    const tree = renderer.create(
      <ParticipantList store={store} />
    ).toJSON()
    expect(tree).toMatchSnapshot();
  });
})