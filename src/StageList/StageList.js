import React from 'react';
import Stage from '../Stage/Stage';

export default function StageList(props) {
  const list = props.store.participants;

  const onStageTrue = list.filter(element => element.onStage === true);
  const onStageList = onStageTrue.map(element => (
    <Stage name={element.name} avatar={element.avatar} key={element.id} />
  ));
  return (
    <div className='views-container views-container__with-sidebar'>
      {onStageList}
    </div>
  );
}
