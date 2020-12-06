import axios from "axios";
import React from "react";
import useReducerWithSideEffects, {
  Update,
  NoUpdate,
  SideEffect,
} from "use-reducer-with-side-effects";

const UserStateContext = React.createContext("default");
const UserDispatchContext = React.createContext("default");

UserStateContext.displayName = "UserStateContext";
UserDispatchContext.displayName = "UserDispatchContext";

const login = async (username, password) => {
  const response = await axios.post("http://localhost:3004/auth/login/", null, {
    auth: {
      username,
      password,
    },
  });
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem("id", response.data.id);
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
      return SideEffect((_, dispatch) => {
        login(action.payload.email, action.payload.password)
          .then((resp) => {
            dispatch({ type: "set_user", payload: resp });
          })
          .catch((err) => {
            dispatch({ type: "fail_user" });
          });
      });
    case "set_user":
      return Update({
        ...initialState,
        user: action.payload,
        has_auth: true,
        error_msg: "",
        loading: false,
      });
    case "fail_user": {
      return {
        ...initialState,
        user: null,
        has_auth: false,
        error_msg: "Authentication failed",
        loading: false,
      };
    }
    case "deauth_user":
      localStorage.clear();
      return Update({
        ...initialState,
        user: null,
        has_auth: false,
        error_msg: "",
        loading: false,
      });
    default:
      return NoUpdate();
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducerWithSideEffects(userReducer, {
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
