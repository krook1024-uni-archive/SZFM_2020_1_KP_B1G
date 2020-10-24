import * as React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceManyField,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  PasswordInput,
} from "react-admin";

const helpName = "";
const helpEmail = "";
const helpPassword = "";
const helpDateOfBirth = "";
const helpLicenseCategory = "";

const labelName = "";
const labelEmail = "";
const labelPassword = "";
const labelDateOfBirth = "";
const labelLicenseCategory = "";

var userName;
var userEmail;
var userPassword;
var userDateOfBirth;
var userLicenseCategory;

var userDateCreated;
var userDateUpdated;
var userDateDeleted;

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
      <TextInput
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

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm></SimpleForm>
  </Edit>
);
