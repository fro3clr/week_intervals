import React, { Component } from "react";
import HourCell from "./HourCell";

class DayRow extends Component {
  handleClick = (day, clearOrFillReservation) => event => {
    event.preventDefault();
    clearOrFillReservation(day);
  };

  isDayFullfilled = schedule =>
    schedule.length === 1 && schedule[0].bt === 0 && schedule[0].et === 1439;

  render() {
    const { day, schedule, reserveTime, clearOrFillReservation } = this.props;
    console.log(schedule.length);
    return (
      <div>
        <div className="dayRow">
          <div
            className={"rowCell day " + (schedule.length > 0 ? "filled" : "")}
          >
            <h3>{day}</h3>
          </div>
          <div
            className={
              "rowCell allday " +
              (this.isDayFullfilled(schedule) ? "fullfilled" : "")
            }
            onClick={this.handleClick(day, clearOrFillReservation)}
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
