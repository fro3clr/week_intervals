import { fromJS } from "immutable";
import { REQUEST_INFO, RECEIVE_INFO, RESERVE_TIME } from "../actions/calendar";

const reducer = (state, action) => {
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

      let finalMap = newMap.toJS();
      finalMap.push(additionalList);

      return state.setIn(["schedule", "list", time.day], fromJS(finalMap));
    default:
      return state;
  }
};

export default reducer;