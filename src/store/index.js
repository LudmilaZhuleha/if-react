import {createStore} from "redux";
import searchValueReducer from './searchValueReducer';

export const store = createStore(searchValueReducer);
