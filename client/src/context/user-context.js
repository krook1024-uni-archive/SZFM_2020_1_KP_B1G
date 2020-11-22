import axios from "axios";
import React, { useReducer } from "react";

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

const userReducer = (initialState, action) => {
  switch (action.type) {
    case "auth_user":
      const login = async (username, password) => {
        const response = await axios.post(
          "http://localhost:3004/auth/login/",
          null,
          {
            auth: {
              username,
              password,
            },
          }
        );
      };
      try {
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("password", response.data.password);
        Promise.resolve();
        return {
          ...initialState,
          user: response.data,
          has_auth: true,
          error_msg: "",
          loading: false,
        };
      } catch (err) {
        Promise.reject();
        return {
          ...initialState,
        };
      }
    case "deauth_user":
      localStorage.removeItem("usename", user.username);
      localStorage.removeItem("password", user.password);
      return {
        ...initialState,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    has_auth: false,
    error_msg: "",
    loading: true,
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
