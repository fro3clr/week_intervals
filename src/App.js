import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Calendar from "./components/Calendar";
import { fetchInfo, reserveTime } from "./actions/calendar";

class App extends Component {
  componentWillMount() {
    this.props.fetchInfo();
  }

  getSchedule(info) {
    return info && info.get("list") ? info.toJS().list : [];
  }

  render() {
    return (
      <div>
        <h2>Set schedule</h2>
        <Calendar schedule={this.getSchedule(this.props.schedule)}
                  reserveTime={this.props.reserveTime} />
        <button>Clear</button>
        <button>Save changes</button>
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
    reserveTime: (time) => {
      dispatch(reserveTime(time));
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
