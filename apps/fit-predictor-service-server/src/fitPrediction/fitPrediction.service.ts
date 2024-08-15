import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FitPredictionServiceBase } from "./base/fitPrediction.service.base";

@Injectable()
export class FitPredictionService extends FitPredictionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
