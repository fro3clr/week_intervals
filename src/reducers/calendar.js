import { Map } from "immutable";
import { REQUEST_INFO, RECEIVE_INFO } from "../actions/calendar";

const reducer = (state, action) => {
  switch (action.type) {
    case REQUEST_INFO:
      return state.set("schedule", Map({ isFetching: true, list: [] }));
    case RECEIVE_INFO:
      return state
        .setIn(["schedule", "isFetching"], false)
        .mergeIn(["schedule", "list"], action.info);
    default:
      return state;
  }
};

export default reducer;
