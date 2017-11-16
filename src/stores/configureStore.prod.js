import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';
import reducer from '../reducers/calendar';

const INITIAL_STATE = fromJS({});

const configureStore = () =>
  createStore(reducer, INITIAL_STATE, applyMiddleware(thunk));

export default configureStore;
