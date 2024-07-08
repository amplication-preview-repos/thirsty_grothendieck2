import { CarParkWhereUniqueInput } from "../carPark/CarParkWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FavoriteCarParkCreateInput = {
  carPark?: CarParkWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
