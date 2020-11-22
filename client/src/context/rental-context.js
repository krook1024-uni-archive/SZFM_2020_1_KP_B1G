import React, { useReducer } from "react";

// init contexts
const RentalStateContext = React.createContext();
const RentalDispatchContext = React.createContext();

// reducer for specific actions
const rentalReducer = (state, action) => {
  switch (action.type) {
    case "set_cars": {
      return {
        ...state,
        cars_loading: false,
        cars: action.payload,
      };
    }
    case "add_to_cars": {
      const cars = state.cars.concat(action.payload);
      return {
        ...state,
        cars_loading: false,
        cars: cars.filter((item, pos) => cars.indexOf(item) === pos),
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
