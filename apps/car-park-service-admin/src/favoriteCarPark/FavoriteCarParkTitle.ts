import { FavoriteCarPark as TFavoriteCarPark } from "../api/favoriteCarPark/FavoriteCarPark";

export const FAVORITECARPARK_TITLE_FIELD = "id";

export const FavoriteCarParkTitle = (record: TFavoriteCarPark): string => {
  return record.id?.toString() || String(record.id);
};
