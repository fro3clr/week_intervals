import {
  REQUEST_INFO,
  RECEIVE_INFO,
  RESERVE_TIME,
  CLEAR_RESERVATION
} from "../actions/calendar";
import { IMPORT_FROM_STORAGE } from "../actions/storage";
import calendar from "./calendar";
import storage from "./storage";

const rootReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_INFO:
    case RECEIVE_INFO:
    case RESERVE_TIME:
    case CLEAR_RESERVATION:
      return calendar(state, action);
    case IMPORT_FROM_STORAGE:
      return storage(state, action);
    default:
      return state;
  }
};

export default rootReducer;
