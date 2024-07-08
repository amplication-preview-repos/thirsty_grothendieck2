import * as graphql from "@nestjs/graphql";
import { CarParkResolverBase } from "./base/carPark.resolver.base";
import { CarPark } from "./base/CarPark";
import { CarParkService } from "./carPark.service";

@graphql.Resolver(() => CarPark)
export class CarParkResolver extends CarParkResolverBase {
  constructor(protected readonly service: CarParkService) {
    super(service);
  }
}
