import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import UserList from "./components/UserList";
import UserEdit from "./components/UserEdit";
import RentList from "./components/RentList";
import CarList from "./components/CarList";

const dataProvider = jsonServerProvider("http://localhost:3004"); // todo: move this to a config

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} edit={UserEdit} />
      <Resource name="rents" list={RentList} />
      <Resource name="cars" list={CarList} />
    </Admin>
  );
};

export default App;
