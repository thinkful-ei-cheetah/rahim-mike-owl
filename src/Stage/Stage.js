import React from 'react';
import './Stage.css';
import store from '../STORE';

export default function Stage(props) {
  return (
    <div className='views-container views-container__with-sidebar'>
      <div>
        <p>{store.participants.name}</p>
      </div>
      <div>
        <img src={store.participants.avatar} />
      </div>
    </div>
  );
}
