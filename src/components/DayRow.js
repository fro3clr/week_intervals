import React, { Component } from "react";
import HourCell from "./HourCell";

class DayRow extends Component {
  render() {
    const { day, schedule, reserveTime } = this.props;
    return (
      <div>
        <div className="dayRow">
          <div className="rowCell">
            <h3>{day}</h3>
          </div>
          <div className="rowCell">+</div>
          {[...Array(24)].map((x, i) => (
            <HourCell
              i={i}
              schedule={schedule}
              reserveTime={reserveTime}
              day={day}
              key={i}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default DayRow;
