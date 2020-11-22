import React from "react";
import { fetchUtils, Admin, Resource } from "react-admin";
import UserList from "../components/admin/UserList";
import UserEdit from "../components/admin/UserEdit";
import RentList from "../components/admin/RentList";
import CarList from "../components/admin/CarList";
import CarEdit from "../components/admin/CarEdit";
import CarCreate from "../components/admin/CarCreate";
import UserCreate from "../components/admin/UserCreate";

import authProvider from "../admin/authProvider";
import rentalDataProvider from "../admin/rentalDataProvider";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "appplication/json" });
    const username = localStorage.getItem("username"),
      password = localStorage.getItem("password");
    const authString = `Basic ${btoa(`${username}:${password}`).replace(
      "=",
      ""
    )}`;
    options.headers.set("Authorization", authString);
    return fetchUtils.fetchJson(url, options);
  }
};

const dataProvider = rentalDataProvider("http://localhost:3004", httpClient);

const AdminPage = () => {
  return (
    <>
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource
          name="users"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
        />
        <Resource name="rents" list={RentList} />
        <Resource
          name="cars"
          list={CarList}
          edit={CarEdit}
          create={CarCreate}
        />
      </Admin>
    </>
  );
};

export default AdminPage;
