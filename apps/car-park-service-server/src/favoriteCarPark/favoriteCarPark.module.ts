import { Module } from "@nestjs/common";
import { FavoriteCarParkModuleBase } from "./base/favoriteCarPark.module.base";
import { FavoriteCarParkService } from "./favoriteCarPark.service";
import { FavoriteCarParkController } from "./favoriteCarPark.controller";
import { FavoriteCarParkResolver } from "./favoriteCarPark.resolver";

@Module({
  imports: [FavoriteCarParkModuleBase],
  controllers: [FavoriteCarParkController],
  providers: [FavoriteCarParkService, FavoriteCarParkResolver],
  exports: [FavoriteCarParkService],
})
export class FavoriteCarParkModule {}
