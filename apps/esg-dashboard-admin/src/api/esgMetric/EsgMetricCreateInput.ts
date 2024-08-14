import { ReadingCreateNestedManyWithoutEsgMetricsInput } from "./ReadingCreateNestedManyWithoutEsgMetricsInput";

export type EsgMetricCreateInput = {
  description?: string | null;
  metricName?: string | null;
  readings?: ReadingCreateNestedManyWithoutEsgMetricsInput;
};
