import { SortOrder } from "../../util/SortOrder";

export type IoTDeviceOrderByInput = {
  createdAt?: SortOrder;
  houseId?: SortOrder;
  id?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
