import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Calendar from "./components/Calendar";
import { fetchInfo } from "./actions/calendar";

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
        <Calendar schedule={this.getSchedule(this.props.schedule)} />
      </div>
    );
  }
}

const mapStateToProps = state => state.toObject();

const mapDispatchToProps = dispatch => {
  return {
    fetchInfo: () => {
      dispatch(fetchInfo());
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
