import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

const INITIAL_STATE = fromJS({});

const configureStore = () =>
  createStore(rootReducer, INITIAL_STATE, composeWithDevTools(applyMiddleware(thunk)));

export default configureStore;
