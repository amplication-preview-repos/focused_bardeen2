import { FitPrediction } from "../fitPrediction/FitPrediction";

export type UserMeasurements = {
  armLength: number | null;
  bust: number | null;
  createdAt: Date;
  fitPredictions?: Array<FitPrediction>;
  gender?: "Option1" | null;
  height: number | null;
  hips: number | null;
  id: string;
  inseam: number | null;
  shoulderWidth: number | null;
  updatedAt: Date;
  waist: number | null;
  weight: number | null;
};
