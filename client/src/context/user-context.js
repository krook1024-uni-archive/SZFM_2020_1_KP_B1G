import React, { useReducer } from "react";

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

const userReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: action.payload.user,
        has_auth: true,
        error_msg: "",
        loading: false,
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: null,
        has_auth: false,
        error_msg: "",
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null, has_auth: false, error_msg = '', loading=true
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

// hook which lets you access state
const useUserState = () => {
  const context = React.useContext(UserStateContext);

  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }

  return context;
};

// hook which lets you dispatch actions to the reducer to modify the context
const useUserDispatch = () => {
  const context = React.useContext(UserDispatchContext);

  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }

  return context;
};

export { UserProvider, useUserDispatch, useUserState };
