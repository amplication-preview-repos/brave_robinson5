import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ReadingListRelationFilter } from "../reading/ReadingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type IoTDeviceWhereInput = {
  house?: HouseWhereUniqueInput;
  id?: StringFilter;
  readings?: ReadingListRelationFilter;
  typeField?: StringNullableFilter;
};
