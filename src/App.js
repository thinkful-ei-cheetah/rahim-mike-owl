import React from 'react';
import Participant from './Participant/Participant';

function App() {
  return (
    <main>
      <ul>
        <Participant
          name={'foo'}
          avatar={
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'
          }
          inSession={'true'}
        />
      </ul>
    </main>
  );
}

export default App;
