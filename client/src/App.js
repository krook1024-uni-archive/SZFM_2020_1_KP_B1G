import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RentalProvider } from "./context/rental-context";
import { UserProvider } from "./context/user-context";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <UserProvider>
            <RentalProvider>
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
