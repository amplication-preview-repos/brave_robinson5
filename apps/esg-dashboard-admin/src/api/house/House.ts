import { IoTDevice } from "../ioTDevice/IoTDevice";

export type House = {
  address: string | null;
  createdAt: Date;
  id: string;
  ioTDevices?: Array<IoTDevice>;
  owner: string | null;
  updatedAt: Date;
};
