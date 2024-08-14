import { EsgMetricWhereUniqueInput } from "../esgMetric/EsgMetricWhereUniqueInput";
import { IoTDeviceWhereUniqueInput } from "../ioTDevice/IoTDeviceWhereUniqueInput";

export type ReadingCreateInput = {
  esgMetric?: EsgMetricWhereUniqueInput | null;
  ioTDevice?: IoTDeviceWhereUniqueInput | null;
  timestamp?: Date | null;
  value?: number | null;
};
