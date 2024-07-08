import { FavoriteCarParkWhereInput } from "./FavoriteCarParkWhereInput";
import { FavoriteCarParkOrderByInput } from "./FavoriteCarParkOrderByInput";

export type FavoriteCarParkFindManyArgs = {
  where?: FavoriteCarParkWhereInput;
  orderBy?: Array<FavoriteCarParkOrderByInput>;
  skip?: number;
  take?: number;
};
