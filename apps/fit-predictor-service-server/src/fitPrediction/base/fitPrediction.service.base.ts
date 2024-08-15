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
  FitPrediction as PrismaFitPrediction,
  Garment as PrismaGarment,
  UserMeasurements as PrismaUserMeasurements,
} from "@prisma/client";

export class FitPredictionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FitPredictionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.fitPrediction.count(args);
  }

  async fitPredictions(
    args: Prisma.FitPredictionFindManyArgs
  ): Promise<PrismaFitPrediction[]> {
    return this.prisma.fitPrediction.findMany(args);
  }
  async fitPrediction(
    args: Prisma.FitPredictionFindUniqueArgs
  ): Promise<PrismaFitPrediction | null> {
    return this.prisma.fitPrediction.findUnique(args);
  }
  async createFitPrediction(
    args: Prisma.FitPredictionCreateArgs
  ): Promise<PrismaFitPrediction> {
    return this.prisma.fitPrediction.create(args);
  }
  async updateFitPrediction(
    args: Prisma.FitPredictionUpdateArgs
  ): Promise<PrismaFitPrediction> {
    return this.prisma.fitPrediction.update(args);
  }
  async deleteFitPrediction(
    args: Prisma.FitPredictionDeleteArgs
  ): Promise<PrismaFitPrediction> {
    return this.prisma.fitPrediction.delete(args);
  }

  async getGarment(parentId: string): Promise<PrismaGarment | null> {
    return this.prisma.fitPrediction
      .findUnique({
        where: { id: parentId },
      })
      .garment();
  }

  async getUserMeasurement(
    parentId: string
  ): Promise<PrismaUserMeasurements | null> {
    return this.prisma.fitPrediction
      .findUnique({
        where: { id: parentId },
      })
      .userMeasurement();
  }
}