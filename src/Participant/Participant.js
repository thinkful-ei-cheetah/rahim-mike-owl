import React from 'react';
import './Participant.css';

export default function Participant(props) {
  return (
    <div className='session-participant'>
      <img className='user-avatar' src={props.avatar} alt='avatar' />
      
      <div className='participant-info'>
        <h6 className='participant-name'>{props.name}</h6>
        <div className='participant-status'>{props.inSession}</div>
        <a href='#'>boot</a>
      </div>
    </div>
  );
}
