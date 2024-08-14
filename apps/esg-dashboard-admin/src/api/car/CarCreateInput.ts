import { ReadingWhereUniqueInput } from "../reading/ReadingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CarCreateInput = {
  make?: string | null;
  model?: string | null;
  reading?: ReadingWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  vin?: string | null;
  year?: number | null;
};
