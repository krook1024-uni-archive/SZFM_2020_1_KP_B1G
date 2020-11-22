import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RentalProvider } from "./context/rental-context";
import { UserProvider } from "./context/user-context";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";

import { useUserDispatch } from "./context/user-context";
const CheckLogin = () => {
  const userDispatch = useUserDispatch();

  useEffect(() => {
    const user = localStorage.getItem("username");
    const pass = localStorage.getItem("password");

    if (user && pass) {
      console.log(user, pass);
      userDispatch({
        type: "auth_user",
        payload: { email: user, password: pass },
      });
    }
  }, [userDispatch]);

  return null;
};

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <UserProvider>
            <RentalProvider>
              <CheckLogin />
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
            </RentalProvider>
          </UserProvider>
          <Route path="/admin">
            <AdminPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
