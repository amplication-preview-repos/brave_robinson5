import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";
import { ReadingCreateNestedManyWithoutIoTDevicesInput } from "./ReadingCreateNestedManyWithoutIoTDevicesInput";

export type IoTDeviceCreateInput = {
  house?: HouseWhereUniqueInput | null;
  readings?: ReadingCreateNestedManyWithoutIoTDevicesInput;
  typeField?: string | null;
};
