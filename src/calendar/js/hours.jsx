import React from 'react';
import ReactDOM from 'react-dom';

const HOURS_IN_DAY = 24;

function buildHoursArray() {
  let i = 12;
  let hours = [];

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
    let hours = buildHoursArray();

    return (
      <div className="inline-block">
        {hours.map((hour, i) => {
          let label = (
            <div className="soft">
              <span>
                {hour}
              </span>
              <span>
                {i >= 12 ? 'pm' : 'am'}
              </span>
            </div>
          );

          if (!this.props.label) {
            label = null;
          }

          return (
            <div className="hour-slot border-top" key={i}>
              {label}
            </div>
          );
        })}
      </div>
    );
  }
});
