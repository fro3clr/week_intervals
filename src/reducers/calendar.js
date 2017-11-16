import { fromJS } from "immutable";
import {
  REQUEST_INFO,
  RECEIVE_INFO,
  RESERVE_TIME,
  CLEAR_OR_FILL_RESERVATION
} from "../actions/calendar";

const calendar = (state, action) => {
  switch (action.type) {
    case REQUEST_INFO:
      return state.set("schedule", fromJS({ isFetching: true, list: {} }));
    case RECEIVE_INFO:
      return state
        .setIn(["schedule", "isFetching"], false)
        .mergeIn(["schedule", "list"], action.info);
    case RESERVE_TIME:
      const time = action.time;
      const currentInterval = state.getIn(["schedule", "list", time.day]);

      let additionalList = {};
      let newMap = currentInterval.map(v => {
        let value = v.toJS();
        if (time.start - 1 === value.et) {
          value.et = time.end;
        } else if (time.end + 1 === value.bt) {
          value.bt = time.start;
        } else {
          additionalList = { bt: time.start, et: time.end };
        }
        return fromJS(value);
      });

      if (newMap.size === 0) {
        additionalList = { bt: time.start, et: time.end };
      }

      let finalMap = newMap.toJS();
      finalMap.push(additionalList);

      return state.setIn(["schedule", "list", time.day], fromJS(finalMap));

    case CLEAR_OR_FILL_RESERVATION:
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

    default:
      return state;
  }
};

export default calendar;
