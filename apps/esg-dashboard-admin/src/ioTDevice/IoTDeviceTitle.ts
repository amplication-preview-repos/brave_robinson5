import { IoTDevice as TIoTDevice } from "../api/ioTDevice/IoTDevice";

export const IOTDEVICE_TITLE_FIELD = "typeField";

export const IoTDeviceTitle = (record: TIoTDevice): string => {
  return record.typeField?.toString() || String(record.id);
};
