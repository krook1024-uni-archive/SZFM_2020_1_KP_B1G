import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
} from "react-admin";

export const UserEdit = (props) => {
  return (
    <Edit title="Edit User" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled></TextInput>
        <DateInput source="createdAt" disabled></DateInput>
        <TextInput source="email"></TextInput>
        <TextInput source="password"></TextInput>
        <DateInput source="dateOfBirth"></DateInput>
        <SelectInput
          source="licenseCategory"
          choices={[
            { id: "AM", name: "AM" },
            { id: "A1", name: "A1" },
            { id: "A2", name: "A2" },
            { id: "A", name: "A" },
            { id: "B1", name: "B1" },
            { id: "B", name: "B" },
            { id: "B+E", name: "B+E" },
            { id: "C1", name: "C1" },
            { id: "C", name: "C" },
            { id: "C+E", name: "C+E" },
            { id: "D1", name: "D1" },
            { id: "D1+E", name: "D1+E" },
            { id: "D", name: "D" },
            { id: "D+E", name: "D+E" },
          ]}
        ></SelectInput>
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
