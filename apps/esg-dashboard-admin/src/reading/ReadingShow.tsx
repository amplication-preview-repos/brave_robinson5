import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { READING_TITLE_FIELD } from "./ReadingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ESGMETRIC_TITLE_FIELD } from "../esgMetric/EsgMetricTitle";
import { IOTDEVICE_TITLE_FIELD } from "../ioTDevice/IoTDeviceTitle";

export const ReadingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Car" target="readingId" label="Cars">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Make" source="make" />
            <TextField label="Model" source="model" />
            <ReferenceField
              label="Reading"
              source="reading.id"
              reference="Reading"
            >
              <TextField source={READING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="VIN" source="vin" />
            <TextField label="Year" source="year" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
