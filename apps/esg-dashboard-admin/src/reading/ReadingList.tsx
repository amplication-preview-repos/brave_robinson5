import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ESGMETRIC_TITLE_FIELD } from "../esgMetric/EsgMetricTitle";
import { IOTDEVICE_TITLE_FIELD } from "../ioTDevice/IoTDeviceTitle";

export const ReadingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Readings"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
