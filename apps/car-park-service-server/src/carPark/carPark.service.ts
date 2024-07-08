import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CarParkServiceBase } from "./base/carPark.service.base";

@Injectable()
export class CarParkService extends CarParkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
