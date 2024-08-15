import { UserMeasurementsWhereInput } from "./UserMeasurementsWhereInput";
import { UserMeasurementsOrderByInput } from "./UserMeasurementsOrderByInput";

export type UserMeasurementsFindManyArgs = {
  where?: UserMeasurementsWhereInput;
  orderBy?: Array<UserMeasurementsOrderByInput>;
  skip?: number;
  take?: number;
};
