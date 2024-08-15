import { FitPredictionUpdateManyWithoutUserMeasurementsItemsInput } from "./FitPredictionUpdateManyWithoutUserMeasurementsItemsInput";

export type UserMeasurementsUpdateInput = {
  armLength?: number | null;
  bust?: number | null;
  fitPredictions?: FitPredictionUpdateManyWithoutUserMeasurementsItemsInput;
  gender?: "Option1" | null;
  height?: number | null;
  hips?: number | null;
  inseam?: number | null;
  shoulderWidth?: number | null;
  waist?: number | null;
  weight?: number | null;
};
