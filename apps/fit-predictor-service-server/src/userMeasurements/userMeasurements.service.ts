import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserMeasurementsServiceBase } from "./base/userMeasurements.service.base";

@Injectable()
export class UserMeasurementsService extends UserMeasurementsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
