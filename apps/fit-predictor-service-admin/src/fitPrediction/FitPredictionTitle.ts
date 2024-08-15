import { FitPrediction as TFitPrediction } from "../api/fitPrediction/FitPrediction";

export const FITPREDICTION_TITLE_FIELD = "fitScore";

export const FitPredictionTitle = (record: TFitPrediction): string => {
  return record.fitScore?.toString() || String(record.id);
};
