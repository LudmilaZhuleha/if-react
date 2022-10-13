import submit_Value, {fetch_available_hotels} from './actionTypes';

const initialState = {
  search: "",
  available: []
}
const searchValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case submit_Value:
      return {...state, search: action.payload};
    case fetch_available_hotels:
      return {...state, available: [...state.available, action.payload]}
    default:
      return state;
  }
}

export default searchValueReducer;