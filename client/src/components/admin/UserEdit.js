import * as React from "react";
import useRef from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  PasswordInput,
} from "react-admin";

const helpName = "Name of user";
const helpEmail = "e.g: example@xyz.com";
const helpPassword = "Contain xyz";
const helpDateOfBirth = "";
const helpLicenseCategory = "Example: 'B+E'";

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
