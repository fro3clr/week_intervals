import { IMPORT_FROM_STORAGE } from "../actions/storage";

const storage = (state, action) => {
  switch (action.type) {
    case IMPORT_FROM_STORAGE:
      return state.mergeIn(["schedule", "list"], action.schedule);
    default:
      return state;
  }
};

export default storage;
