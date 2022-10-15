import submit_Value, {
  children_ages, date_from, date_to,
  decrement_adults,
  decrement_children, decrement_rooms,
  increment_adults,
  increment_children,
  increment_rooms
} from "./actionTypes";

export const submitValue = (payload) =>(
  {type: submit_Value,
   payload: payload}
);

export const incrementAdults = ()=>(
  {type: increment_adults}
);
export const incrementChildren = ()=>(
  {type: increment_children}
);
export const incrementRooms = ()=>(
  {type: increment_rooms}
);
export const decrementAdults = ()=>(
  {type: decrement_adults}
);
export const decrementChildren = ()=>(
  {type: decrement_children}
);
export const decrementRooms = ()=>(
  {type: decrement_rooms}
);
export const childrenAges = (payload)=>(
  {type: children_ages, payload}
);
export const dateFrom = (payload)=>(
  {type: date_from, payload}
);
export const dateTo = (payload)=>(
  {type: date_to, payload}
);
