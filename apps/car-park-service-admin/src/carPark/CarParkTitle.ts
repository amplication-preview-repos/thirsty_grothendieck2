import { CarPark as TCarPark } from "../api/carPark/CarPark";

export const CARPARK_TITLE_FIELD = "carParkType";

export const CarParkTitle = (record: TCarPark): string => {
  return record.carParkType?.toString() || String(record.id);
};
