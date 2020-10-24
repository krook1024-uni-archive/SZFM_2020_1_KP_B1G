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
} from "react-admin";

const helpManufacturer = "The name of the car manufacturer";
const helpModel = "The name of the car model";
const helpManufacturingDate = "Pick the car Manufacturing Date";
const helpPlate = "The license plate number";

const labelManufacturer = "Manufacturer";
const labelModel = "Model";
const labelManufacturingDate = "Manufacturing Date";
const labelPlate = "License Plate Number";

const carManufacturer;
const carManufacturingDate;
const carModel;
const carPlate;
const carDateCreated;
const carDateUpdated;
const carDateDeleted;

export const CarCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        source="manufacturer"
        label={labelManufacturer}
        helperText={helpManufacturer}
      />
      <TextInput source="model" label={labelModel} helperText={helpModel} />
      <DateInput
        source="manufacturing_date"
        label={labelManufacturingDate}
        helperText={helpManufacturingDate}
      />
      <TextInput
        source="license_plate"
        label={labelPlate}
        helperText={helpPlate}
      />
    </SimpleForm>
  </Create>
);

export const CarEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="title" />
      <TextInput multiline source="teaser" />
      <TextInput source="body" />
      <DateInput label="Publication date" source="published_at" />
      <ReferenceManyField
        label="Comments"
        reference="comments"
        target="post_id"
      >
        <Datagrid>
          <TextField source="body" />
          <DateField source="created_at" />
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
    </SimpleForm>
  </Edit>
);
