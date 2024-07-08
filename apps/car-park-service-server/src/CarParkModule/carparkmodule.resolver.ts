import * as graphql from "@nestjs/graphql";
import { AddFavoriteCarParkDto } from "../carParkModule/AddFavoriteCarParkDto";
import { FavoriteCarParkDto } from "../carParkModule/FavoriteCarParkDto";
import { CarParkDto } from "../carParkModule/CarParkDto";
import { CarParkModuleService } from "./carparkmodule.service";

export class CarParkModuleResolver {
  constructor(protected readonly service: CarParkModuleService) {}

  @graphql.Mutation(() => FavoriteCarParkDto)
  async AddFavoriteCarPark(
    @graphql.Args()
    args: AddFavoriteCarParkDto
  ): Promise<FavoriteCarParkDto> {
    return this.service.AddFavoriteCarPark(args);
  }

  @graphql.Query(() => [CarParkDto])
  async FilterCarParksByFreeParking(
    @graphql.Args()
    args: string
  ): Promise<CarParkDto[]> {
    return this.service.FilterCarParksByFreeParking(args);
  }

  @graphql.Query(() => [CarParkDto])
  async FilterCarParksByHeight(
    @graphql.Args()
    args: number
  ): Promise<CarParkDto[]> {
    return this.service.FilterCarParksByHeight(args);
  }

  @graphql.Query(() => [CarParkDto])
  async FilterCarParksByNightParking(
    @graphql.Args()
    args: string
  ): Promise<CarParkDto[]> {
    return this.service.FilterCarParksByNightParking(args);
  }
}
