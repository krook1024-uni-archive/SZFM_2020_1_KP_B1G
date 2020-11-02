import * as React from "react";
import {
  Create,
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

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" label={labelName} helperText={helpName} />
      <TextInput source="email" label={labelEmail} helperText={helpEmail} />
      <PasswordInput
        source="passord"
        label={labelPassword}
        helperText={helpPassword}
      />
      <DateInput
        source="date_of_birth"
        label={labelDateOfBirth}
        helperText={helpDateOfBirth}
      />
      <TextInput
        source="license_category"
        label={labelLicenseCategory}
        helperText={helpLicenseCategory}
      />
    </SimpleForm>
  </Create>
);

export default UserCreate;
