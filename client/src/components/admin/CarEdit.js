import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

export const CarEdit = (props) => {
  return (
    <Edit title="Edit Car" {...props}>
      <SimpleForm>
        <TextInput source="id"></TextInput>
        <TextInput source="make"></TextInput>
        <TextInput source="plateNumber"></TextInput>
        <TextInput source="model"></TextInput>
        <DateInput source="productionYear" disabled></DateInput>
      </SimpleForm>
    </Edit>
  );
};

export default CarEdit;
