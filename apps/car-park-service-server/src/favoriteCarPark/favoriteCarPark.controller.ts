import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FavoriteCarParkService } from "./favoriteCarPark.service";
import { FavoriteCarParkControllerBase } from "./base/favoriteCarPark.controller.base";

@swagger.ApiTags("favoriteCarParks")
@common.Controller("favoriteCarParks")
export class FavoriteCarParkController extends FavoriteCarParkControllerBase {
  constructor(protected readonly service: FavoriteCarParkService) {
    super(service);
  }
}
