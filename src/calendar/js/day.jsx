import React from 'react';
import ReactDOM from 'react-dom';
import Hours from './hours.jsx';

const HOUR_HEIGHT = 40;
const LABEL_HEIGHT = 20;
const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default React.createClass({
  render() {
    let events = this.props.events;

    function eventStyle(event) {
      let startDate = new Date(event.start);
      let endDate = new Date(event.end);

      // Figure out top and bottom measurements.
      let start = ((startDate.getHours() + (startDate.getMinutes() / 60)) * HOUR_HEIGHT) + LABEL_HEIGHT;
      let end = ((endDate.getHours() + (endDate.getMinutes() / 60)) * HOUR_HEIGHT) + LABEL_HEIGHT;

      // Compare the event start and end times to other events to find overlaps.
      let overlaps = events.filter((evt) => {
        return (new Date(event.start) < new Date(evt.end) && new Date(event.start) >= new Date(evt.start))
          || (new Date(event.end) <= new Date(evt.end) && new Date(event.end) > new Date(evt.start))
      });

      // Set the width based on the number of overlaps.
      let widthPercent = 100;
      widthPercent = widthPercent / (overlaps.length);

      // Get/set the index of the event for positioning.
      let index = 0;
      let indexes = overlaps.map((evt) => evt.index);
      while (indexes.indexOf(index) !== -1) {
        index++;
      }
      event.index = index;

      return {
        bottom: 'calc(100% - ' + end + 'px)',
        top: start + 'px',
        width: widthPercent + '%',
        left: (index * widthPercent) + '%'
      }
    }

    let day = new Date(this.props.id)
    return (
      <div className="day-col inline-block relative">
        <div className="label center">
          {WEEK_DAYS[day.getDay()]}
        </div>

        <Hours />

        <div className="events">
          {events.map((event, i) => {
            return <div key={event.id} className="event" style={eventStyle(event)}>
              {event.activity_name}
              <div className="micro">
                <span>Available spots: </span>
                <span>{event.available_spots}</span> /
                <span>{event.max_guests}</span>
              </div>
            </div>
          })}
        </div>
      </div>
    );
  }
});
