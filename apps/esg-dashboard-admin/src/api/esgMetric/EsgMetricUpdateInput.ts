import { ReadingUpdateManyWithoutEsgMetricsInput } from "./ReadingUpdateManyWithoutEsgMetricsInput";

export type EsgMetricUpdateInput = {
  description?: string | null;
  metricName?: string | null;
  readings?: ReadingUpdateManyWithoutEsgMetricsInput;
  typeField?: "Option1" | null;
};
