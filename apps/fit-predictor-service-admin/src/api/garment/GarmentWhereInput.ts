import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FitPredictionListRelationFilter } from "../fitPrediction/FitPredictionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type GarmentWhereInput = {
  brand?: StringNullableFilter;
  category?: "Option1";
  elasticity?: BooleanNullableFilter;
  fabricType?: StringNullableFilter;
  fitPredictions?: FitPredictionListRelationFilter;
  fitType?: StringNullableFilter;
  id?: StringFilter;
  length?: FloatNullableFilter;
  productId?: StringNullableFilter;
  shoulder?: FloatNullableFilter;
  size?: StringNullableFilter;
  width?: FloatNullableFilter;
};
