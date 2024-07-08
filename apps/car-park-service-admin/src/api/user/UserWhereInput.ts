import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FavoriteCarParkListRelationFilter } from "../favoriteCarPark/FavoriteCarParkListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  favoriteCarParks?: FavoriteCarParkListRelationFilter;
};
