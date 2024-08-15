import { FitPredictionUpdateManyWithoutGarmentsInput } from "./FitPredictionUpdateManyWithoutGarmentsInput";

export type GarmentUpdateInput = {
  brand?: string | null;
  category?: "Option1" | null;
  elasticity?: boolean | null;
  fabricType?: string | null;
  fitPredictions?: FitPredictionUpdateManyWithoutGarmentsInput;
  fitType?: string | null;
  length?: number | null;
  productId?: string | null;
  shoulder?: number | null;
  size?: string | null;
  width?: number | null;
};
