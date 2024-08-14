import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { EsgMetricTitle } from "../esgMetric/EsgMetricTitle";
import { IoTDeviceTitle } from "../ioTDevice/IoTDeviceTitle";

export const ReadingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
