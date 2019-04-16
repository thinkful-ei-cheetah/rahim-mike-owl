import React from 'react';
import './ParticipantList.css';
import Participant from '../Participant/Participant';

function ParticipantList(props) {
  const list = props.store.participants;
  
  const inSessionParticipants = list.filter(participant => participant.inSession)
  const others = list.filter(participant => !participant.inSession)
  const orderedList = inSessionParticipants.concat(others)
  
  const participants = orderedList.map(participant => {
    return <Participant 
              avatar={participant.avatar}
              name={participant.name}
              inSession={participant.inSession}
              onStage={participant.onStage}
              key={participant.id} 
           />
  });

  return (
    <div className='participants-list'>
      {participants}
    </div>
  );
  
}


export default ParticipantList;
