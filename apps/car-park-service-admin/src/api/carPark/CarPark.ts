import { FavoriteCarPark } from "../favoriteCarPark/FavoriteCarPark";

export type CarPark = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: string | null;
  xCoord: number | null;
  yCoord: number | null;
  carParkType: string | null;
  typeOfParkingSystem: string | null;
  shortTermParking: string | null;
  carParkDecks: number | null;
  gantryHeight: number | null;
  carParkBasement: boolean | null;
  carParkNo: string | null;
  freeParking: string | null;
  nightParking: string | null;
  favoriteCarParks?: Array<FavoriteCarPark>;
};
