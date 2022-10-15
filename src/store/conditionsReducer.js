import {
  children_ages, date_from, date_to,
  decrement_adults,
  decrement_children, decrement_rooms,
  increment_adults,
  increment_children,
  increment_rooms
} from "./actionTypes";

const initialState = {
  adults: 0,
  children: 0,
  rooms: 0,
  ages: [],
  dateStart: '',
  dateEnd: ''
}

const conditionsReducer =(state = initialState, action) =>{
  switch(action.type){
    case increment_adults:
      return {...state, adults: state.adults + 1};
    case increment_children:
      return  {...state, children: state.children + 1};
    case increment_rooms:
      return  {...state, rooms: state.rooms + 1};
    case decrement_adults:
      return {...state, adults: state.adults - 1};
    case decrement_children:
      return  {...state, children: state.children - 1};
    case decrement_rooms:
      return  {...state, rooms: state.rooms - 1};
    case children_ages:
      return {...state, ages: [...state.ages, action.payload]};
    case date_from:
      return {...state, dateStart: Date.parse(action.payload)};
    case date_to:
      return {...state, dateEnd: Date.parse(action.payload)};
    default:
      return state;
  }
}

export default conditionsReducer;