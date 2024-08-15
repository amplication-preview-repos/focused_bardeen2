import { GarmentWhereUniqueInput } from "../garment/GarmentWhereUniqueInput";
import { UserMeasurementsWhereUniqueInput } from "../userMeasurements/UserMeasurementsWhereUniqueInput";

export type FitPredictionCreateInput = {
  fitRating?: number | null;
  fitScore?: string | null;
  garment?: GarmentWhereUniqueInput | null;
  recommendation?: string | null;
  userMeasurement?: UserMeasurementsWhereUniqueInput | null;
};