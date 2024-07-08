import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FavoriteCarParkListRelationFilter } from "../favoriteCarPark/FavoriteCarParkListRelationFilter";

export type CarParkWhereInput = {
  id?: StringFilter;
  address?: StringNullableFilter;
  xCoord?: FloatNullableFilter;
  yCoord?: FloatNullableFilter;
  carParkType?: StringNullableFilter;
  typeOfParkingSystem?: StringNullableFilter;
  shortTermParking?: StringNullableFilter;
  carParkDecks?: IntNullableFilter;
  gantryHeight?: FloatNullableFilter;
  carParkBasement?: BooleanNullableFilter;
  carParkNo?: StringNullableFilter;
  freeParking?: StringNullableFilter;
  nightParking?: StringNullableFilter;
  favoriteCarParks?: FavoriteCarParkListRelationFilter;
};
