import React, { Component } from "react";

class HourCell extends Component {
  isDayTaken = (schedule, start, end) =>
    schedule.some(i => start >= i.bt && end <= i.et);

  handleDayClick = (day, start, end, reserveTime) => event => {
    event.preventDefault();
    reserveTime({ day, start, end });
  };

  handleDayMouseOver = (day, start, end, reserveTime) => event => {
    event.preventDefault();
    if (event.buttons === 1) {
      reserveTime({ day, start, end });
    }
  };
  render() {
    const { i, day, schedule, reserveTime } = this.props;
    const start = i * 60,
      end = start + 59;
    return (
      <div
        className={
          "rowCell hour " +
          (this.isDayTaken(schedule, start, end) ? "taken" : "")
        }
        onClick={this.handleDayClick(day, start, end, reserveTime)}
        onMouseOver={this.handleDayMouseOver(day, start, end, reserveTime)}
      >
        {" "}
      </div>
    );
  }
}

export default HourCell;
