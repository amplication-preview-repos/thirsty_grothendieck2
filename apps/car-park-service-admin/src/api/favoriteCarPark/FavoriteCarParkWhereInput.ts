import { StringFilter } from "../../util/StringFilter";
import { CarParkWhereUniqueInput } from "../carPark/CarParkWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FavoriteCarParkWhereInput = {
  id?: StringFilter;
  carPark?: CarParkWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
