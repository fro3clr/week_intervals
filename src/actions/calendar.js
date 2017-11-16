import info from "../info/schedule";

export const REQUEST_INFO = "REQUEST_INFO";
export const RECEIVE_INFO = "RECEIVE_INFO";
export const RESERVE_TIME = "RESERVE_TIME";
export const CLEAR_OR_FILL_RESERVATION = "CLEAR_OR_FILL_RESERVATION";

export const requestInfo = () => ({
  type: REQUEST_INFO
});

export const receiveInfo = posts => ({
  type: RECEIVE_INFO,
  info
});

export const reserveTime = time => ({
  type: RESERVE_TIME,
  time
});

export const clearOrFillReservation = day => ({
  type: CLEAR_OR_FILL_RESERVATION,
  day
});

export const fetchInfo = () => dispatch => {
  dispatch(requestInfo());
  dispatch(receiveInfo(info));
};
