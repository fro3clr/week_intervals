import info from "../info/schedule";

export const REQUEST_INFO = "REQUEST_INFO";
export const RECEIVE_INFO = "RECEIVE_INFO";

export const requestInfo = () => ({
  type: REQUEST_INFO
});

export const receiveInfo = posts => ({
  type: RECEIVE_INFO,
  info
});

export const fetchInfo = () => dispatch => {
  dispatch(requestInfo());
  dispatch(receiveInfo(info));
};
