import { FavoriteCarParkCreateNestedManyWithoutCarParksInput } from "./FavoriteCarParkCreateNestedManyWithoutCarParksInput";

export type CarParkCreateInput = {
  address?: string | null;
  xCoord?: number | null;
  yCoord?: number | null;
  carParkType?: string | null;
  typeOfParkingSystem?: string | null;
  shortTermParking?: string | null;
  carParkDecks?: number | null;
  gantryHeight?: number | null;
  carParkBasement?: boolean | null;
  carParkNo?: string | null;
  freeParking?: string | null;
  nightParking?: string | null;
  favoriteCarParks?: FavoriteCarParkCreateNestedManyWithoutCarParksInput;
};
