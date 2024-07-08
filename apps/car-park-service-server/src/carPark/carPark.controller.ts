import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CarParkService } from "./carPark.service";
import { CarParkControllerBase } from "./base/carPark.controller.base";

@swagger.ApiTags("carParks")
@common.Controller("carParks")
export class CarParkController extends CarParkControllerBase {
  constructor(protected readonly service: CarParkService) {
    super(service);
  }
}
