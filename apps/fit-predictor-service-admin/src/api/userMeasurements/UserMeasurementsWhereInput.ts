import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { FitPredictionListRelationFilter } from "../fitPrediction/FitPredictionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserMeasurementsWhereInput = {
  armLength?: FloatNullableFilter;
  bust?: FloatNullableFilter;
  fitPredictions?: FitPredictionListRelationFilter;
  gender?: "Option1";
  height?: FloatNullableFilter;
  hips?: FloatNullableFilter;
  id?: StringFilter;
  inseam?: FloatNullableFilter;
  shoulderWidth?: FloatNullableFilter;
  waist?: FloatNullableFilter;
  weight?: FloatNullableFilter;
};
