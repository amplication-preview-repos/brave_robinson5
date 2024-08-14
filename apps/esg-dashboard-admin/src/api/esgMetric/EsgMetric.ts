import { Reading } from "../reading/Reading";

export type EsgMetric = {
  createdAt: Date;
  description: string | null;
  id: string;
  metricName: string | null;
  readings?: Array<Reading>;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
