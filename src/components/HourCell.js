import React, { Component } from "react";

class HourCell extends Component {
  isDayTaken = (schedule, start, end) =>
    schedule.some(i => start >= i.bt && end <= i.et);

  handleDayClick = (info, reserveTime, setFreeTime) => event => {
    event.preventDefault();
    let { schedule, day, start, end } = info;

    if (this.isDayTaken(schedule, start, end)) {
      setFreeTime({ day, start, end });
    } else {
      reserveTime({ day, start, end });
    }
  };

  handleDayMouseOver = (info, reserveTime, setFreeTime) => event => {
    event.preventDefault();
    let { schedule, day, start, end } = info;

    if (event.buttons === 1) {
      if (this.isDayTaken(schedule, start, end)) {
        setFreeTime({ day, start, end });
      } else {
        reserveTime({ day, start, end });
      }
    }
  };
  render() {
    const { i, day, schedule, reserveTime, setFreeTime } = this.props;
    const start = i * 60,
      end = start + 59;
    const info = { schedule, day, start, end };
    return (
      <div
        className={
          "rowCell hour " +
          (this.isDayTaken(schedule, start, end) ? "taken" : "")
        }
        onClick={this.handleDayClick(info, reserveTime, setFreeTime)}
        onMouseOver={this.handleDayMouseOver(info, reserveTime, setFreeTime)}
      >
        {" "}
      </div>
    );
  }
}

export default HourCell;
