import { EsgMetric } from "../esgMetric/EsgMetric";
import { IoTDevice } from "../ioTDevice/IoTDevice";

export type Reading = {
  createdAt: Date;
  esgMetric?: EsgMetric | null;
  id: string;
  ioTDevice?: IoTDevice | null;
  timestamp: Date | null;
  updatedAt: Date;
  value: number | null;
};
