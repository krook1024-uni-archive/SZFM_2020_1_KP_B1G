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
          source="passord"
          label={labelPassword}
          initialValue="password" /*todo inicializálni*/
        />
        <DateInput
          source="date_of_birth"
          label={labelDateOfBirth}
          initialValue={new Date()} /*todo inicializálni*/
        />
        <TextInput
          source="license_category"
          label={labelLicenseCategory}
          initialValue="X" /*todo inicializálni*/
        />
      </SimpleForm>
    </SimpleForm>
  </Edit>
);

export default UserEdit;
