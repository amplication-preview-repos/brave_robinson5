import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ReadingTitle } from "../reading/ReadingTitle";

export const EsgMetricCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="metricName" source="metricName" />
        <ReferenceArrayInput
          source="readings"
          reference="Reading"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReadingTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
