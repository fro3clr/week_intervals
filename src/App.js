import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Calendar from "./components/Calendar";
import { fetchInfo, reserveTime, clearReservation } from "./actions/calendar";
import { saveToStorage, importFromStorage } from "./actions/storage";

class App extends Component {
  componentWillMount() {
    this.props.fetchInfo();
    this.props.importFromStorage();
  }

  getSchedule(info) {
    return info && info.get("list") ? info.toJS().list : [];
  }

  handleClearClick = clearReservation => event => {
    event.preventDefault();
    clearReservation();
  };

  handleSaveClick = saveToStorage => event => {
    event.preventDefault();
    saveToStorage();
  };

  render() {
    return (
      <div>
        <h2>Set schedule</h2>
        <Calendar
          schedule={this.getSchedule(this.props.schedule)}
          reserveTime={this.props.reserveTime}
          clearReservation={this.props.clearReservation}
        />
        <button onClick={this.handleClearClick(this.props.clearReservation)}>
          Clear
        </button>
        <button onClick={this.handleSaveClick(this.props.saveToStorage)}>
          Save changes
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => state.toObject();

const mapDispatchToProps = dispatch => {
  return {
    fetchInfo: () => {
      dispatch(fetchInfo());
    },
    reserveTime: time => {
      dispatch(reserveTime(time));
    },
    clearReservation: day => {
      dispatch(clearReservation(day));
    },
    saveToStorage: () => {
      dispatch(saveToStorage());
    },
    importFromStorage: () => {
      dispatch(importFromStorage());
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
