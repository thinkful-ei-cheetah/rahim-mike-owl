import React from 'react';
import ParticipantList from './ParticipantList/ParticipantList';

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
      <div className='views-container views-container__with-sidebar'></div>
      <div className='control-bar-container control-bar__with-sidebar'></div>
    </div>
  );
}

export default App;