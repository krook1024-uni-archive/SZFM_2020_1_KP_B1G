import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

export const CarList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id"></TextField>
        <TextField source="make"></TextField>
        <TextField source="plateNumber"></TextField>
        <TextField source="model"></TextField>
        <DateField source="productionYear"></DateField>
        <EditButton basePath="/cars"></EditButton>
        <DeleteButton basePath="/cars"></DeleteButton>
      </Datagrid>
    </List>
  );
};

export default CarList;
