import { Injectable } from "@nestjs/common";
import { AddFavoriteCarParkDto } from "../carParkModule/AddFavoriteCarParkDto";
import { FavoriteCarParkDto } from "../carParkModule/FavoriteCarParkDto";
import { CarParkDto } from "../carParkModule/CarParkDto";

@Injectable()
export class CarParkModuleService {
  constructor() {}
  async AddFavoriteCarPark(args: AddFavoriteCarParkDto): Promise<FavoriteCarParkDto> {
    throw new Error("Not implemented");
  }
  async FilterCarParksByFreeParking(args: string): Promise<CarParkDto[]> {
    throw new Error("Not implemented");
  }
  async FilterCarParksByHeight(args: number): Promise<CarParkDto[]> {
    throw new Error("Not implemented");
  }
  async FilterCarParksByNightParking(args: string): Promise<CarParkDto[]> {
    throw new Error("Not implemented");
  }
}
