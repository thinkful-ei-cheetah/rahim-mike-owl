import React from 'react';
import './Participant.css';

export default function Participant(props) {
  return (
    <li>
      <div className='avatar'>
        <img src={props.avatar} alt={'avatar'} />
      </div>
      <div className='name'>
        <p>{props.name}</p>
        <p>{props.inSession}</p>
      </div>
    </li>
  );
}
