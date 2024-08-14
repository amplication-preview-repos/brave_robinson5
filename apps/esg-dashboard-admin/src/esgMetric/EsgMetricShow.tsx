import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ESGMETRIC_TITLE_FIELD } from "./EsgMetricTitle";
import { IOTDEVICE_TITLE_FIELD } from "../ioTDevice/IoTDeviceTitle";

export const EsgMetricShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="metricName" source="metricName" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Reading"
          target="esgMetricId"
          label="Readings"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="ESGMetric"
              source="esgmetric.id"
              reference="EsgMetric"
            >
              <TextField source={ESGMETRIC_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="IoTDevice"
              source="iotdevice.id"
              reference="IoTDevice"
            >
              <TextField source={IOTDEVICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="value" source="value" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
