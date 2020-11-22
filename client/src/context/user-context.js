import axios from "axios";
import React, { useReducer } from "react";

const UserStateContext = React.createContext("default");
const UserDispatchContext = React.createContext("default");

const login = async (username, password) => {
  const response = await axios.post("http://localhost:3004/auth/login/", null, {
    auth: {
      username,
      password,
    },
  });
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem("username", response.data.email);
      localStorage.setItem("password", response.data.password);
      resolve(response.data);
    } catch (err) {
      reject("auth failed");
    }
  });
};

const userReducer = (initialState, action) => {
  switch (action.type) {
    case "auth_user":
      login(action.payload.email, action.payload.password)
        .then((resp) => {
          return {
            ...initialState,
            user: resp,
            has_auth: true,
            error_msg: "",
            loading: false,
          };
        })
        .catch(() => {
          return {
            ...initialState,
            user: null,
            has_auth: false,
            error_msg: "Authentication failed",
            loading: false
          };
        });
      break;
    case "deauth_user":
      localStorage.clear();
      return {
        ...initialState,
      };
    default:
      return initialState;
  }
};

const UserProvider = ({children}) => {
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
