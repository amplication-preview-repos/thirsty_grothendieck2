import { CarParkWhereUniqueInput } from "../carPark/CarParkWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FavoriteCarParkUpdateInput = {
  carPark?: CarParkWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
