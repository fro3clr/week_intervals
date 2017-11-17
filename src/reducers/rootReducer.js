import {
  REQUEST_INFO,
  RECEIVE_INFO,
  RESERVE_TIME,
  CLEAR_OR_FILL_RESERVATION,
  SET_FREE_TIME
} from "../actions/calendar";
import { IMPORT_FROM_STORAGE } from "../actions/storage";
import calendar from "./calendar";
import storage from "./storage";

const rootReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_INFO:
    case RECEIVE_INFO:
    case RESERVE_TIME:
    case SET_FREE_TIME:
    case CLEAR_OR_FILL_RESERVATION:
      return calendar(state, action);
    case IMPORT_FROM_STORAGE:
      return storage(state, action);
    default:
      return state;
  }
};

export default rootReducer;
