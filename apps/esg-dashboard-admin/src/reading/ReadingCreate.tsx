import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { CarTitle } from "../car/CarTitle";
import { EsgMetricTitle } from "../esgMetric/EsgMetricTitle";
import { IoTDeviceTitle } from "../ioTDevice/IoTDeviceTitle";

export const ReadingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="cars"
          reference="Car"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CarTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="esgMetric.id"
          reference="EsgMetric"
          label="ESGMetric"
        >
          <SelectInput optionText={EsgMetricTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="ioTDevice.id"
          reference="IoTDevice"
          label="IoTDevice"
        >
          <SelectInput optionText={IoTDeviceTitle} />
        </ReferenceInput>
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
