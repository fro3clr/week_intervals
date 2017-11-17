import { fromJS } from "immutable";
import {
  REQUEST_INFO,
  RECEIVE_INFO,
  RESERVE_TIME,
  CLEAR_OR_FILL_RESERVATION
} from "../actions/calendar";
ё
const calendar = (state, action) => {
  switch (action.type) {
    case REQUEST_INFO:
      return state.set("schedule", fromJS({ isFetching: true, list: {} }));
    case RECEIVE_INFO:
      return state
        .setIn(["schedule", "isFetching"], false)
        .mergeIn(["schedule", "list"], action.info);
    case RESERVE_TIME: {
      const time = action.time;
      const currentInterval = state.getIn(["schedule", "list", time.day]);

      let newInt = currentInterval.toJS();

      let leftMark = newInt.find(o => o.et === time.start - 1);
      let rightMark = newInt.find(o => o.bt === time.end + 1);

      if (typeof leftMark !== "undefined" && typeof rightMark !== "undefined") {
        newInt = newInt.filter(function(obj) {
          return obj.et !== time.start - 1 || obj.bt !== time.end + 1;
        });

        newInt.push({ bt: leftMark.bt, et: rightMark.et });
      } else if (typeof leftMark !== "undefined") {
        newInt = newInt.filter(function(obj) {
          return obj.et !== time.start - 1;
        });
        newInt.push({ bt: leftMark.bt, et: time.end });
      } else if (typeof rightMark !== "undefined") {
        newInt = newInt.filter(function(obj) {
          return obj.bt !== time.end + 1;
        });
        newInt.push({ bt: time.start, et: rightMark.et });
      } else {
        newInt.push({ bt: time.start, et: time.end });
      }

      return state.setIn(["schedule", "list", time.day], fromJS(newInt));
    }
    case CLEAR_OR_FILL_RESERVATION: {
      if (typeof action.day === "undefined") {
        let currentState = state.getIn(["schedule", "list"]);
        let currentStateObj = currentState.toJS();

        Object.keys(currentStateObj).forEach(key => {
          currentStateObj[key] = [];
        });

        return state.setIn(["schedule", "list"], fromJS(currentStateObj));
      }

      let currentState = state.getIn(["schedule", "list", action.day]).toJS();
      if (Object.keys(currentState).length !== 0) {
        return state.setIn(["schedule", "list", action.day], fromJS([]));
      } else {
        return state.setIn(
          ["schedule", "list", action.day],
          fromJS([{ bt: 0, et: 1439 }])
        );
      }
    }

    default:
      return state;
  }
};

export default calendar;
