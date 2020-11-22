import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RentalProvider } from "./context/rental-context";
import { UserProvider } from "./context/user-context";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <UserProvider>
              <RentalProvider>
                <HomePage />
              </RentalProvider>
            </UserProvider>
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
