import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ReadingTitle } from "../reading/ReadingTitle";

export const EsgMetricEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
