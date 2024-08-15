import * as graphql from "@nestjs/graphql";
import { FitPredictionResolverBase } from "./base/fitPrediction.resolver.base";
import { FitPrediction } from "./base/FitPrediction";
import { FitPredictionService } from "./fitPrediction.service";

@graphql.Resolver(() => FitPrediction)
export class FitPredictionResolver extends FitPredictionResolverBase {
  constructor(protected readonly service: FitPredictionService) {
    super(service);
  }
}
