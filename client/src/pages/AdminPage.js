import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import UserList from "../components/admin/UserList";
import UserEdit from "../components/admin/UserEdit";
import RentList from "../components/admin/RentList";
import CarList from "../components/admin/CarList";
import CarEdit from "../components/admin/CarEdit";

const dataProvider = jsonServerProvider("http://localhost:3004"); // todo: move this to a config

const AdminPage = () => {
  return (
    <>
      <Admin dataProvider={dataProvider}>
        <Resource name='users' list={UserList} edit={UserEdit} />
        <Resource name='rents' list={RentList} />
        <Resource name='cars' list={CarList} edit={CarEdit} />
      </Admin>
    </>
  );
};

export default AdminPage;
