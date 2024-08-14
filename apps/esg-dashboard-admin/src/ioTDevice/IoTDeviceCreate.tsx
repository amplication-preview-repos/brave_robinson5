import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { HouseTitle } from "../house/HouseTitle";
import { ReadingTitle } from "../reading/ReadingTitle";

export const IoTDeviceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="house.id" reference="House" label="House">
          <SelectInput optionText={HouseTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="readings"
          reference="Reading"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReadingTitle} />
        </ReferenceArrayInput>
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
