import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
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
      </SimpleShowLayout>
    </Show>
  );
};
