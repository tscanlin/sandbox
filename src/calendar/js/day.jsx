import React from 'react';
import ReactDOM from 'react-dom';

const HOURS_IN_DAY = 24;

function buildHoursArray() {
  var i = 12;
  var hours = [];

  // Build hours array.
  while (i <= 12 && hours.length < HOURS_IN_DAY) {
    hours.push(i);
    i++;
    if (i === 13) {
      i = 1;
    }
  }

  return hours;
}

export default React.createClass({
  render() {
    var hours = buildHoursArray();

    return (
      <div>
        {hours.map((hour, i) => {
          return <div className="hour-slot" key={i}>{hour}</div>
        })}
      </div>
    );
  }
});
