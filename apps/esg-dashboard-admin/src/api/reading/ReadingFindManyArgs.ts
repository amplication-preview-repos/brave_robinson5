import { ReadingWhereInput } from "./ReadingWhereInput";
import { ReadingOrderByInput } from "./ReadingOrderByInput";

export type ReadingFindManyArgs = {
  where?: ReadingWhereInput;
  orderBy?: Array<ReadingOrderByInput>;
  skip?: number;
  take?: number;
};
