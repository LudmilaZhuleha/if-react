import {createStore} from "redux";
import searchValueReducer from './searchValueReducer';
import conditionsReducer from './conditionsReducer';
import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  searchValueReducer,
  conditionsReducer,
  loginReducer,
})

const persistConfig = {
  key: 'root',
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);