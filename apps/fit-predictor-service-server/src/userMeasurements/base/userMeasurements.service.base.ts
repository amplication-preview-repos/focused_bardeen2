/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  UserMeasurements as PrismaUserMeasurements,
  FitPrediction as PrismaFitPrediction,
} from "@prisma/client";

export class UserMeasurementsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserMeasurementsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userMeasurements.count(args);
  }

  async userMeasurementsItems(
    args: Prisma.UserMeasurementsFindManyArgs
  ): Promise<PrismaUserMeasurements[]> {
    return this.prisma.userMeasurements.findMany(args);
  }
  async userMeasurements(
    args: Prisma.UserMeasurementsFindUniqueArgs
  ): Promise<PrismaUserMeasurements | null> {
    return this.prisma.userMeasurements.findUnique(args);
  }
  async createUserMeasurements(
    args: Prisma.UserMeasurementsCreateArgs
  ): Promise<PrismaUserMeasurements> {
    return this.prisma.userMeasurements.create(args);
  }
  async updateUserMeasurements(
    args: Prisma.UserMeasurementsUpdateArgs
  ): Promise<PrismaUserMeasurements> {
    return this.prisma.userMeasurements.update(args);
  }
  async deleteUserMeasurements(
    args: Prisma.UserMeasurementsDeleteArgs
  ): Promise<PrismaUserMeasurements> {
    return this.prisma.userMeasurements.delete(args);
  }

  async findFitPredictions(
    parentId: string,
    args: Prisma.FitPredictionFindManyArgs
  ): Promise<PrismaFitPrediction[]> {
    return this.prisma.userMeasurements
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .fitPredictions(args);
  }
}
