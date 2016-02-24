import React from 'react';
import ReactDOM from 'react-dom';

import Hours from './hours.jsx';

export default React.createClass({
  render() {
    // var hours = buildHoursArray();

    function eventStyle(event) {
      return {
        top: '100px',
        height: '100px',
      }
    }

    return (
      <div className="inline-block relative">
        <Hours />
        <div className="events">
          {this.props.events.map((event) => {
            console.log(event);
            return <div className="event" style={eventStyle(event)}>{event.name}</div>
          })}
        </div>
      </div>
    );
  }
});
