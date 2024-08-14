import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { EsgMetricTitle } from "../esgMetric/EsgMetricTitle";
import { IoTDeviceTitle } from "../ioTDevice/IoTDeviceTitle";

export const ReadingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
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
