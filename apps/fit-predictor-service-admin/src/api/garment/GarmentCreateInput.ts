import { FitPredictionCreateNestedManyWithoutGarmentsInput } from "./FitPredictionCreateNestedManyWithoutGarmentsInput";

export type GarmentCreateInput = {
  brand?: string | null;
  category?: "Option1" | null;
  elasticity?: boolean | null;
  fabricType?: string | null;
  fitPredictions?: FitPredictionCreateNestedManyWithoutGarmentsInput;
  fitType?: string | null;
  length?: number | null;
  productId?: string | null;
  shoulder?: number | null;
  size?: string | null;
  width?: number | null;
};
