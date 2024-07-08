import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CarParkModuleService } from "./carparkmodule.service";
import { FavoriteCarParkDto } from "../carParkModule/FavoriteCarParkDto";
import { CarParkDto } from "../carParkModule/CarParkDto";

@swagger.ApiTags("carParkModules")
@common.Controller("carParkModules")
export class CarParkModuleController {
  constructor(protected readonly service: CarParkModuleService) {}

  @common.Post("/favorites")
  @swagger.ApiOkResponse({
    type: FavoriteCarParkDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddFavoriteCarPark(
    @common.Body()
    body: string
  ): Promise<FavoriteCarParkDto> {
        return this.service.AddFavoriteCarPark(body);
      }

  @common.Get("/filterByFreeParking")
  @swagger.ApiOkResponse({
    type: CarParkDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FilterCarParksByFreeParking(
    @common.Body()
    body: string
  ): Promise<CarParkDto[]> {
        return this.service.FilterCarParksByFreeParking(body);
      }

  @common.Get("/filterByHeight")
  @swagger.ApiOkResponse({
    type: CarParkDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FilterCarParksByHeight(
    @common.Body()
    body: string
  ): Promise<CarParkDto[]> {
        return this.service.FilterCarParksByHeight(body);
      }

  @common.Get("/filterByNightParking")
  @swagger.ApiOkResponse({
    type: CarParkDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FilterCarParksByNightParking(
    @common.Body()
    body: string
  ): Promise<CarParkDto[]> {
        return this.service.FilterCarParksByNightParking(body);
      }
}
