import { Module } from "@nestjs/common";
import { CarParkModuleService } from "./carparkmodule.service";
import { CarParkModuleController } from "./carparkmodule.controller";
import { CarParkModuleResolver } from "./carparkmodule.resolver";

@Module({
  controllers: [CarParkModuleController],
  providers: [CarParkModuleService, CarParkModuleResolver],
  exports: [CarParkModuleService],
})
export class CarParkModuleModule {}
