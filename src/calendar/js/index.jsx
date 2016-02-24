import React from 'react';
import ReactDOM from 'react-dom';
import data from 'json!../data/day_1.json';
import Day from './day.jsx';
import Hours from './hours.jsx';
// console.log(Day, data)



ReactDOM.render(
  <div className="grid">
    <div className="inline-block valign-top">
      <Hours label="true"></Hours>
    </div>
    {data.timeslots.map((slot) => {
      // "key" is needed in addition to "id" since key is used for tracking and
      // isn't passed down, but id can be passed down to a child component.
      return <Day key={slot.id} id={slot.id} events={data.timeslots}></Day>
    })}
  </div>,
  document.getElementById('example')
);
