import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GarmentWhereUniqueInput } from "../garment/GarmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserMeasurementsWhereUniqueInput } from "../userMeasurements/UserMeasurementsWhereUniqueInput";

export type FitPredictionWhereInput = {
  fitRating?: IntNullableFilter;
  fitScore?: StringNullableFilter;
  garment?: GarmentWhereUniqueInput;
  id?: StringFilter;
  recommendation?: StringNullableFilter;
  userMeasurement?: UserMeasurementsWhereUniqueInput;
};
