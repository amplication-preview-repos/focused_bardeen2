import { FitPrediction } from "../fitPrediction/FitPrediction";

export type Garment = {
  brand: string | null;
  category?: "Option1" | null;
  createdAt: Date;
  elasticity: boolean | null;
  fabricType: string | null;
  fitPredictions?: Array<FitPrediction>;
  fitType: string | null;
  id: string;
  length: number | null;
  productId: string | null;
  shoulder: number | null;
  size: string | null;
  updatedAt: Date;
  width: number | null;
};
