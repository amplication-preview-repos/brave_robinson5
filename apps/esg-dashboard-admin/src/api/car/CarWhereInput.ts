import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ReadingWhereUniqueInput } from "../reading/ReadingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CarWhereInput = {
  id?: StringFilter;
  make?: StringNullableFilter;
  model?: StringNullableFilter;
  reading?: ReadingWhereUniqueInput;
  user?: UserWhereUniqueInput;
  vin?: StringNullableFilter;
  year?: IntNullableFilter;
};
