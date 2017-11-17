import React, { Component } from "react";

class HourCell extends Component {
  isDayTaken = (schedule, start, end) =>
    schedule.some(i => start >= i.bt && end <= i.et);

  handleDayClick = (
    schedule,
    day,
    start,
    end,
    reserveTime,
    setFreeTime
  ) => event => {
    event.preventDefault();

    if (this.isDayTaken(schedule, start, end)) {
      setFreeTime({ day, start, end });
    } else {
      reserveTime({ day, start, end });
    }
  };

  handleDayMouseOver = (
    schedule,
    day,
    start,
    end,
    reserveTime,
    setFreeTime
  ) => event => {
    event.preventDefault();

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
    return (
      <div
        className={
          "rowCell hour " +
          (this.isDayTaken(schedule, start, end) ? "taken" : "")
        }
        onClick={this.handleDayClick(
          schedule,
          day,
          start,
          end,
          reserveTime,
          setFreeTime
        )}
        onMouseOver={this.handleDayMouseOver(
          schedule,
          day,
          start,
          end,
          reserveTime,
          setFreeTime
        )}
      >
        {" "}
      </div>
    );
  }
}

export default HourCell;
