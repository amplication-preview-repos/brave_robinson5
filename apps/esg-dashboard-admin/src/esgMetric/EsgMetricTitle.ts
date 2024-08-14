import { EsgMetric as TEsgMetric } from "../api/esgMetric/EsgMetric";

export const ESGMETRIC_TITLE_FIELD = "metricName";

export const EsgMetricTitle = (record: TEsgMetric): string => {
  return record.metricName?.toString() || String(record.id);
};
