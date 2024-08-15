import { Module } from "@nestjs/common";
import { FitPredictionModuleBase } from "./base/fitPrediction.module.base";
import { FitPredictionService } from "./fitPrediction.service";
import { FitPredictionController } from "./fitPrediction.controller";
import { FitPredictionResolver } from "./fitPrediction.resolver";

@Module({
  imports: [FitPredictionModuleBase],
  controllers: [FitPredictionController],
  providers: [FitPredictionService, FitPredictionResolver],
  exports: [FitPredictionService],
})
export class FitPredictionModule {}
