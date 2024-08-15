import { UserMeasurements as TUserMeasurements } from "../api/userMeasurements/UserMeasurements";

export const USERMEASUREMENTS_TITLE_FIELD = "id";

export const UserMeasurementsTitle = (record: TUserMeasurements): string => {
  return record.id?.toString() || String(record.id);
};
