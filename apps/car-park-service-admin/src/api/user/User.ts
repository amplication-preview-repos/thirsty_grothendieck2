import { JsonValue } from "type-fest";
import { FavoriteCarPark } from "../favoriteCarPark/FavoriteCarPark";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  favoriteCarParks?: Array<FavoriteCarPark>;
};
