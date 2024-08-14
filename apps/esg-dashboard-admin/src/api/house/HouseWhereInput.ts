import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IoTDeviceListRelationFilter } from "../ioTDevice/IoTDeviceListRelationFilter";

export type HouseWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  ioTDevices?: IoTDeviceListRelationFilter;
  owner?: StringNullableFilter;
};
