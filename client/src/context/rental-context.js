import React, { useReducer } from "react";
import axios from "axios";

// init contexts
const RentalStateContext = React.createContext();
const RentalDispatchContext = React.createContext();

// reducer for specific actions
const rentalReducer = (state, action) => {
  switch (action.type) {
    case "get_cars": {
      const url = "http://localhost:3004/cars";
      const cars = axios
        .get(url)
        .then((data) => {
          return data.data;
        })
        .catch((err) => console.log(err));
      return {
        ...state,
        cars,
        cars_loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

// provider component that provides its children the dispatch and state context
const RentalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rentalReducer, {
    cars: [],
    cars_loading: true,
  });

  return (
    <RentalStateContext.Provider value={state}>
      <RentalDispatchContext.Provider value={dispatch}>
        {children}
      </RentalDispatchContext.Provider>
    </RentalStateContext.Provider>
  );
};

// hook which lets you access state
const useRentalState = () => {
  const context = React.useContext(RentalStateContext);

  if (context === undefined) {
    throw new Error("useRentalState must be used within a RentalProvider");
  }

  return context;
};

// hook which lets you dispatch actions to the reducer to modify the context
const useRentalDispatch = () => {
  const context = React.useContext(RentalDispatchContext);

  if (context === undefined) {
    throw new Error("useRentalDispatch must be used within a RentalProvider");
  }

  return context;
};

export { RentalProvider, useRentalState, useRentalDispatch };
