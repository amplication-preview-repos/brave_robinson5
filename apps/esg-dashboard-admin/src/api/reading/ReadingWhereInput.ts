import { CarListRelationFilter } from "../car/CarListRelationFilter";
import { EsgMetricWhereUniqueInput } from "../esgMetric/EsgMetricWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IoTDeviceWhereUniqueInput } from "../ioTDevice/IoTDeviceWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ReadingWhereInput = {
  cars?: CarListRelationFilter;
  esgMetric?: EsgMetricWhereUniqueInput;
  id?: StringFilter;
  ioTDevice?: IoTDeviceWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
  value?: FloatNullableFilter;
};
