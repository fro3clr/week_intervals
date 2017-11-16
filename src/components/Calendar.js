import React, { Component } from "react";
import DayRow from "./DayRow";
import Header from "./Header";

class Calendar extends Component {
  render() {
    return (
      <div>
        <Header />
        {Object.keys(this.props.schedule).map((day, i) => (
          <DayRow
            day={day}
            schedule={this.props.schedule[day]}
            reserveTime={this.props.reserveTime}
            clearOrFillReservation={this.props.clearOrFillReservation}
            key={i}
          />
        ))}
      </div>
    );
  }
}

export default Calendar;
