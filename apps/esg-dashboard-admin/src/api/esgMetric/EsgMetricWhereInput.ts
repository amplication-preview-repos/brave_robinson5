import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReadingListRelationFilter } from "../reading/ReadingListRelationFilter";

export type EsgMetricWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  metricName?: StringNullableFilter;
  readings?: ReadingListRelationFilter;
  typeField?: "Option1";
};
