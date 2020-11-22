import * as React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  PasswordInput,
} from "react-admin";

const labelName = "Name";
const labelEmail = "Email";
const labelPassword = "Password";
const labelDateOfBirth = "Date of Birth";
const labelLicenseCategory = "Category of your license";

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput
        source="name"
        label={labelName}
        initialValue="Name" /*todo inicializálni*/
      />
      <TextInput
        source="email"
        label={labelEmail}
        initialValue="test@email.com" /*todo inicializálni*/
      />
      <PasswordInput
        source="password"
        label={labelPassword}
        initialValue="password" /*todo inicializálni*/
      />
      <DateInput
        source="dateOfBirth"
        label={labelDateOfBirth}
        initialValue={new Date()} /*todo inicializálni*/
      />
      <TextInput
        source="licenseCategory"
        label={labelLicenseCategory}
        initialValue="X" /*todo inicializálni*/
      />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
