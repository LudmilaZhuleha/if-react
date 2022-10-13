import fetch_available_hotels from "./actionTypes";

export const fetchAvailableHotels =(payload)=>{
  ({type: fetch_available_hotels, payload: payload});
}
