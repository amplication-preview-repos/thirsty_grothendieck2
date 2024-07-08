import { InputJsonValue } from "../../types";
import { FavoriteCarParkUpdateManyWithoutUsersInput } from "./FavoriteCarParkUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  favoriteCarParks?: FavoriteCarParkUpdateManyWithoutUsersInput;
};
