import { Reading } from "../reading/Reading";
import { User } from "../user/User";

export type Car = {
  createdAt: Date;
  id: string;
  make: string | null;
  model: string | null;
  reading?: Reading | null;
  updatedAt: Date;
  user?: User | null;
  vin: string | null;
  year: number | null;
};
