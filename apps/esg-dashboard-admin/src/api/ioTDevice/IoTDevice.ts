import { House } from "../house/House";
import { Reading } from "../reading/Reading";

export type IoTDevice = {
  createdAt: Date;
  house?: House | null;
  id: string;
  readings?: Array<Reading>;
  typeField: string | null;
  updatedAt: Date;
};
