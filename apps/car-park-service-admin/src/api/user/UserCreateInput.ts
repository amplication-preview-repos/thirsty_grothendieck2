import { InputJsonValue } from "../../types";
import { FavoriteCarParkCreateNestedManyWithoutUsersInput } from "./FavoriteCarParkCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  favoriteCarParks?: FavoriteCarParkCreateNestedManyWithoutUsersInput;
};
