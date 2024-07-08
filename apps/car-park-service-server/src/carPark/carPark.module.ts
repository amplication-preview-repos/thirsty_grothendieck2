import { Module } from "@nestjs/common";
import { CarParkModuleBase } from "./base/carPark.module.base";
import { CarParkService } from "./carPark.service";
import { CarParkController } from "./carPark.controller";
import { CarParkResolver } from "./carPark.resolver";

@Module({
  imports: [CarParkModuleBase],
  controllers: [CarParkController],
  providers: [CarParkService, CarParkResolver],
  exports: [CarParkService],
})
export class CarParkModule {}
