import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FavoriteCarParkServiceBase } from "./base/favoriteCarPark.service.base";

@Injectable()
export class FavoriteCarParkService extends FavoriteCarParkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
