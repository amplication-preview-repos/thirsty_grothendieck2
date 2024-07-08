import { SortOrder } from "../../util/SortOrder";

export type CarParkOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  address?: SortOrder;
  xCoord?: SortOrder;
  yCoord?: SortOrder;
  carParkType?: SortOrder;
  typeOfParkingSystem?: SortOrder;
  shortTermParking?: SortOrder;
  carParkDecks?: SortOrder;
  gantryHeight?: SortOrder;
  carParkBasement?: SortOrder;
  carParkNo?: SortOrder;
  freeParking?: SortOrder;
  nightParking?: SortOrder;
};
