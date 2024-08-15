import { SortOrder } from "../../util/SortOrder";

export type FitPredictionOrderByInput = {
  createdAt?: SortOrder;
  fitRating?: SortOrder;
  fitScore?: SortOrder;
  garmentId?: SortOrder;
  id?: SortOrder;
  recommendation?: SortOrder;
  updatedAt?: SortOrder;
  userMeasurementId?: SortOrder;
};
