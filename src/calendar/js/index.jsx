import React from 'react';
import ReactDOM from 'react-dom';
import data from 'json!../data/day_3.json';
import Day from './day.jsx';
import Hours from './hours.jsx';

var nestedByDay = data.timeslots.reduce((p, c) => {
  var date = c.start.split('T')[0];
  var obj = p[date] || {};

  if (!obj.events) {
    obj.events = [];
  }

  obj.events.push(c);
  obj.date = date;
  p[date] = obj;

  return p;
}, {});

var days = Object.keys(nestedByDay)

ReactDOM.render(
  <div className="grid">
    <div className="inline-block valign-top">
      <Hours label="true" />
    </div>

    {days.map((day) => {
      // "key" is needed in addition to "id" since key is used for tracking and
      // isn't passed down, but id can be passed down to a child component.
      return <Day key={day} id={day} events={nestedByDay[day].events}></Day>
    })}
  </div>,

  document.getElementById('calendar')
);
