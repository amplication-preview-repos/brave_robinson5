import { EsgMetricWhereInput } from "./EsgMetricWhereInput";
import { EsgMetricOrderByInput } from "./EsgMetricOrderByInput";

export type EsgMetricFindManyArgs = {
  where?: EsgMetricWhereInput;
  orderBy?: Array<EsgMetricOrderByInput>;
  skip?: number;
  take?: number;
};
