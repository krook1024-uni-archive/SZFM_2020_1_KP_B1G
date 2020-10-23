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
        <TextField source="id"></TextField>
        <TextField source="email"></TextField>
        <TextField source="password"></TextField>
        <DateField source="dateOfBirth"></DateField>
        <TextField source="licenseCategory"></TextField>
        <DateField source="createdAt"></DateField>
        <DateField source="updatedAt"></DateField>
        <DateField source="deletedAt"></DateField>
        <EditButton basePath="/users"></EditButton>
        <DeleteButton basePath="/users"></DeleteButton>
      </Datagrid>
    </List>
  );
};

export default UserList;
