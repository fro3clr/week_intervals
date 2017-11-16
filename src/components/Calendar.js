import React, { Component } from "react";

class Calendar extends Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.schedule).map((x, i) => (
          <div className="dayRow">
            <div className="rowCell">
              <h3>{x}</h3>
            </div>
            <div className="rowCell">+</div>
            {[...Array(24)].map((x, i) => (
              <div
                className="rowCell hour"
                data-start={i * 60}
                data-end={i * 60 + 59}
              >
                {" "}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Calendar;
