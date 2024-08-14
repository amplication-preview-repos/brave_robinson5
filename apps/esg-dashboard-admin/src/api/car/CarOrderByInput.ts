import { SortOrder } from "../../util/SortOrder";

export type CarOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  make?: SortOrder;
  model?: SortOrder;
  readingId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  vin?: SortOrder;
  year?: SortOrder;
};
