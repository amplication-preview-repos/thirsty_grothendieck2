import { CarPark } from "../carPark/CarPark";
import { User } from "../user/User";

export type FavoriteCarPark = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  carPark?: CarPark | null;
  user?: User | null;
};
