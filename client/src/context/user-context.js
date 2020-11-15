import React, { useReducer } from "react";
import authStrategy from "../../../controllers/authStrategy";

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

const userReducer = (state, action) => {
  const auth = true;
  switch (action.type) {
    case "auth_user": {
      // TODO implement real authentication
      if (auth) {
        return {
          ...state,
          user: action.payload,
          has_auth: true,
          error_msg: "",
        };
      } else {
        return {
          ...state,
          user: null,
          has_auth: false,
          error_msg: "Authentication failed",
        };
      }
    }
    case "deauth_user": {
      return {
        ...state,
        user: null,
        has_auth: false,
        error_msg: "",
      };
    }
    default: {
      return state;
    }
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null
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
