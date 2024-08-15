import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GarmentServiceBase } from "./base/garment.service.base";

@Injectable()
export class GarmentService extends GarmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
