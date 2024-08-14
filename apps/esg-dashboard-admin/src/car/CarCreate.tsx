import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ReadingTitle } from "../reading/ReadingTitle";
import { UserTitle } from "../user/UserTitle";

export const CarCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Make" source="make" />
        <TextInput label="Model" source="model" />
        <ReferenceInput source="reading.id" reference="Reading" label="Reading">
          <SelectInput optionText={ReadingTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="VIN" source="vin" />
        <NumberInput step={1} label="Year" source="year" />
      </SimpleForm>
    </Create>
  );
};
