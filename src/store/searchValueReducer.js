import submit_Value from './actionTypes';

const initialState = {
  search: "",
}
const searchValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case submit_Value:
      return {...state, search: action.payload};
    default:
      return state;
  }
}

export default searchValueReducer;