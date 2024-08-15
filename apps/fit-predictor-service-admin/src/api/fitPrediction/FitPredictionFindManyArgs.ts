import { FitPredictionWhereInput } from "./FitPredictionWhereInput";
import { FitPredictionOrderByInput } from "./FitPredictionOrderByInput";

export type FitPredictionFindManyArgs = {
  where?: FitPredictionWhereInput;
  orderBy?: Array<FitPredictionOrderByInput>;
  skip?: number;
  take?: number;
};
