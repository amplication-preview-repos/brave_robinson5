import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { HouseTitle } from "../house/HouseTitle";
import { ReadingTitle } from "../reading/ReadingTitle";

export const IoTDeviceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
