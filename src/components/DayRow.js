import React, { Component } from "react";
import HourCell from "./HourCell";

class DayRow extends Component {
  handleClick = (day, clearReservation) => event => {
    event.preventDefault();
    clearReservation(day);
  };
  render() {
    const { day, schedule, reserveTime, clearReservation } = this.props;
    return (
      <div>
        <div className="dayRow">
          <div className="rowCell day">
            <h3>{day}</h3>
          </div>
          <div
            className="rowCell allday"
            onClick={this.handleClick(day, clearReservation)}
          />
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
