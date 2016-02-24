import React from 'react';
import ReactDOM from 'react-dom';

import Hours from './hours.jsx';
const HOUR_HEIGHT = 40;

export default React.createClass({
  render() {
    var events = this.props.events;

    function eventStyle(event) {
      let startDate = new Date(event.start);
      let endDate = new Date(event.end);

      // Figure out top and bottom measurements.
      let top = (startDate.getHours() + (startDate.getMinutes() / 60)) * HOUR_HEIGHT;
      let bottom = (endDate.getHours() + (endDate.getMinutes() / 60)) * HOUR_HEIGHT;

      // Compare the event start and end times to other events to find overlaps.
      var widthPercent = 100;
      var collisions = events.filter((evt) => {
        return (new Date(event.start) < new Date(evt.end) && new Date(event.start) >= new Date(evt.start))
          || (new Date(event.end) <= new Date(evt.end) && new Date(event.end) > new Date(evt.start))
      });

      // Get the index of the event.
      var index = 0;
      var indexes = collisions.map((evt) => evt.index);
      while (indexes.indexOf(index) !== -1) {
        index++;
      }
      event.index = index;

      // If an event has the same index as another event then
      // var duplicateIndex = collisions.filter((evt) => {
      //   return evt.index === index;
      // })
      widthPercent = widthPercent / (collisions.length);
      // console.log(index, event, collisions, collisions.length, duplicateIndex);

      return {
        bottom: 'calc(100% - ' + bottom + 'px)',
        top: top + 'px',
        width: widthPercent + '%',
        left: (index * widthPercent) + '%'
      }
    }

    return (
      <div className="inline-block relative">
        <Hours />

        <div className="events">
          {events.map((event, i) => {
            return <div key={event.id} className="event" style={eventStyle(event)}>{event.name}</div>
          })}
        </div>
      </div>
    );
  }
});
