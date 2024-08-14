import { IoTDeviceCreateNestedManyWithoutHousesInput } from "./IoTDeviceCreateNestedManyWithoutHousesInput";

export type HouseCreateInput = {
  address?: string | null;
  ioTDevices?: IoTDeviceCreateNestedManyWithoutHousesInput;
  owner?: string | null;
};
