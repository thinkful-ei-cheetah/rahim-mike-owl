import React from 'react';
import ParticipantList from './ParticipantList/ParticipantList';
import StageList from './StageList/StageList';

function App(props) {
  return (
    <div className='session'>
      <div className='side-bar side-bar__visible'>
        <div className='side-bar-tabs'>
          <button className='side-bar-tab'>Chat</button>
          <button className='side-bar-tab'>Participants</button>
        </div>
        <ParticipantList store={props.store} />
      </div>
      <StageList store={props.store} />
      <div className='control-bar-container control-bar__with-sidebar' />
    </div>
  );
}

export default App;
