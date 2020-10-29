import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/admin'>
            <AdminPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
