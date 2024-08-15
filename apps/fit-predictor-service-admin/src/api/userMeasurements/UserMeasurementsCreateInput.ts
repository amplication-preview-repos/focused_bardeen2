import { FitPredictionCreateNestedManyWithoutUserMeasurementsItemsInput } from "./FitPredictionCreateNestedManyWithoutUserMeasurementsItemsInput";

export type UserMeasurementsCreateInput = {
  armLength?: number | null;
  bust?: number | null;
  fitPredictions?: FitPredictionCreateNestedManyWithoutUserMeasurementsItemsInput;
  gender?: "Option1" | null;
  height?: number | null;
  hips?: number | null;
  inseam?: number | null;
  shoulderWidth?: number | null;
  waist?: number | null;
  weight?: number | null;
};
