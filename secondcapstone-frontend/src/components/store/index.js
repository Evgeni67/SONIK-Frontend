import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import adminReducer from "../reducers/adminReducer";
import loadingReducers from "../reducers/loadingReducer";
import workersReducer from "../reducers/workersReducer";
import thunk from 'redux-thunk'

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

export const initialState = {
  admin: {
      admin:false,
  },
  load: {
    loading: false,
  },
  workers: {
    workers: [],
  },
};
const bigReducer = combineReducers({ loading: loadingReducers, admin:adminReducer,workers:workersReducer });

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
