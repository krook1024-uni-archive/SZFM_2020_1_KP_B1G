import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

export const RentList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField label='CarID' source="carId"></TextField>
        <TextField label='UserID' source="userId"></TextField>
        <DateField source="startTime"></DateField>
        <DateField source="finishTime"></DateField>
        <EditButton basePath="/rents"></EditButton>
        <DeleteButton basePath="/rents"></DeleteButton>
      </Datagrid>
    </List>
  );
};

export default RentList;
