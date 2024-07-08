import { CarParkWhereInput } from "./CarParkWhereInput";
import { CarParkOrderByInput } from "./CarParkOrderByInput";

export type CarParkFindManyArgs = {
  where?: CarParkWhereInput;
  orderBy?: Array<CarParkOrderByInput>;
  skip?: number;
  take?: number;
};
