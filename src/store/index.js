import {createStore} from "redux";
import searchValueReducer from './searchValueReducer';
import conditionsReducer from './conditionsReducer';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  searchValueReducer,
  conditionsReducer,
})
export const store = createStore(rootReducer);
