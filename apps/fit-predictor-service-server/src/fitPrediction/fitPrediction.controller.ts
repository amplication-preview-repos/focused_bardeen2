import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FitPredictionService } from "./fitPrediction.service";
import { FitPredictionControllerBase } from "./base/fitPrediction.controller.base";

@swagger.ApiTags("fitPredictions")
@common.Controller("fitPredictions")
export class FitPredictionController extends FitPredictionControllerBase {
  constructor(protected readonly service: FitPredictionService) {
    super(service);
  }
}
