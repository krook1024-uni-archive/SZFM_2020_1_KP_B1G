import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

export const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="email"></TextField>
        <TextField source="name"></TextField>
        <DateField source="createdAt"></DateField>
        <EditButton basePath="/users"></EditButton>
        <DeleteButton basePath="/users"></DeleteButton>
      </Datagrid>
    </List>
  );
};

export default UserList;
