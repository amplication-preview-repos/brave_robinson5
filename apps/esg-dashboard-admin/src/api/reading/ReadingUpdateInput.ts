import { CarUpdateManyWithoutReadingsInput } from "./CarUpdateManyWithoutReadingsInput";
import { EsgMetricWhereUniqueInput } from "../esgMetric/EsgMetricWhereUniqueInput";
import { IoTDeviceWhereUniqueInput } from "../ioTDevice/IoTDeviceWhereUniqueInput";

export type ReadingUpdateInput = {
  cars?: CarUpdateManyWithoutReadingsInput;
  esgMetric?: EsgMetricWhereUniqueInput | null;
  ioTDevice?: IoTDeviceWhereUniqueInput | null;
  timestamp?: Date | null;
  value?: number | null;
};
