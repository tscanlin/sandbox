import React from 'react';
import ReactDOM from 'react-dom';

import Hours from './hours.jsx';

export default React.createClass({
  render() {
    // var hours = buildHoursArray();

    function eventStyle(event) {
      var startDate = new Date(event.start);
      var endDate = new Date(event.end);
      // var topPercent = ((startDate.getHours() * 60) + startDate.getMinutes()) / 1440 * 100;
      var hourHeight = 41;
      var top = (startDate.getHours() + (startDate.getMinutes() / 60)) * hourHeight;
      var bottom = (endDate.getHours() + (endDate.getMinutes() / 60)) * hourHeight;
      // console.log(top)
      return {
        bottom: 'calc(100% - ' + bottom + 'px)',
        top: top + 'px',
        // height: event.minute_length / 60 * 41 + 'px',
      }
    }

    return (
      <div className="inline-block relative">
        <Hours />
        <div className="events">
          {this.props.events.map((event) => {
            // console.log(event);
            return <div key={event.id} className="event" style={eventStyle(event)}>{event.name}</div>
          })}
        </div>
      </div>
    );
  }
});
