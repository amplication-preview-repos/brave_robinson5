import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";
import { ReadingUpdateManyWithoutIoTDevicesInput } from "./ReadingUpdateManyWithoutIoTDevicesInput";

export type IoTDeviceUpdateInput = {
  house?: HouseWhereUniqueInput | null;
  readings?: ReadingUpdateManyWithoutIoTDevicesInput;
  typeField?: string | null;
};
