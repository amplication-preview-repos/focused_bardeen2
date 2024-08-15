import { Garment } from "../garment/Garment";
import { UserMeasurements } from "../userMeasurements/UserMeasurements";

export type FitPrediction = {
  createdAt: Date;
  fitRating: number | null;
  fitScore: string | null;
  garment?: Garment | null;
  id: string;
  recommendation: string | null;
  updatedAt: Date;
  userMeasurement?: UserMeasurements | null;
};
