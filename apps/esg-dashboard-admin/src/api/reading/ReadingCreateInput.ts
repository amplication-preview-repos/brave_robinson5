import { CarCreateNestedManyWithoutReadingsInput } from "./CarCreateNestedManyWithoutReadingsInput";
import { EsgMetricWhereUniqueInput } from "../esgMetric/EsgMetricWhereUniqueInput";
import { IoTDeviceWhereUniqueInput } from "../ioTDevice/IoTDeviceWhereUniqueInput";

export type ReadingCreateInput = {
  cars?: CarCreateNestedManyWithoutReadingsInput;
  esgMetric?: EsgMetricWhereUniqueInput | null;
  ioTDevice?: IoTDeviceWhereUniqueInput | null;
  timestamp?: Date | null;
  value?: number | null;
};
