import { IoTDeviceUpdateManyWithoutHousesInput } from "./IoTDeviceUpdateManyWithoutHousesInput";

export type HouseUpdateInput = {
  address?: string | null;
  ioTDevices?: IoTDeviceUpdateManyWithoutHousesInput;
  owner?: string | null;
};
