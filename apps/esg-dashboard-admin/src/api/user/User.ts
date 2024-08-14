import { Car } from "../car/Car";
import { JsonValue } from "type-fest";

export type User = {
  cars?: Array<Car>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
