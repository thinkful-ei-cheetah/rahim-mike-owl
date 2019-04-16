import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participant from './Participant';

describe('Participant component', () => {
  let data;
  beforeEach(() => {
    data = {
      id: 1,
      name: 'Koren Templeton',
      avatar:
        'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: true
    };
    return data;
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participant />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a participant', () => {
    const tree = renderer.create(
      <Participant
        name={data.name}
        avatar={data.avatar}
        inSession={data.inSession}
      />
    ).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
