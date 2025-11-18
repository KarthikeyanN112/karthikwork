import React, { createContext, useContext, useReducer } from 'react';

const BookingStateContext = createContext();
const BookingDispatchContext = createContext();

function reducer(state, action){
  switch(action.type){
    case 'ADD_BOOKING':
      return {...state, bookings: [...state.bookings, action.payload]};
    default:
      return state;
  }
}

export function BookingProvider({ children }){
  const [state, dispatch] = useReducer(reducer, { bookings: [] });
  return (
    <BookingStateContext.Provider value={state}>
      <BookingDispatchContext.Provider value={dispatch}>
        {children}
      </BookingDispatchContext.Provider>
    </BookingStateContext.Provider>
  );
}

export function useBooking(){
  const state = useContext(BookingStateContext);
  const dispatch = useContext(BookingDispatchContext);
  return { ...state, dispatch };
}
