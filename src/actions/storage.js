export const SAVE_TO_STORAGE = "SAVE_TO_STORAGE";
export const IMPORT_FROM_STORAGE = "IMPORT_FROM_STORAGE";

export const saveToStorage = () => (dispatch, getState) => {
  const state = getState();
  const savedSchedule = state.getIn(["schedule", "list"]);

  dispatch({
    type: SAVE_TO_STORAGE,
    savedSchedule
  });

  localStorage.setItem("schedule", JSON.stringify(savedSchedule));
};

export const importFromStorage = () => dispatch => {
  let schedule = JSON.parse(localStorage.getItem("schedule")) || {};

  if (Object.keys(schedule).length !== 0) {
    dispatch({
      type: IMPORT_FROM_STORAGE,
      schedule
    });
  }
};
