import * as graphql from "@nestjs/graphql";
import { FavoriteCarParkResolverBase } from "./base/favoriteCarPark.resolver.base";
import { FavoriteCarPark } from "./base/FavoriteCarPark";
import { FavoriteCarParkService } from "./favoriteCarPark.service";

@graphql.Resolver(() => FavoriteCarPark)
export class FavoriteCarParkResolver extends FavoriteCarParkResolverBase {
  constructor(protected readonly service: FavoriteCarParkService) {
    super(service);
  }
}
