import { Garment as TGarment } from "../api/garment/Garment";

export const GARMENT_TITLE_FIELD = "brand";

export const GarmentTitle = (record: TGarment): string => {
  return record.brand?.toString() || String(record.id);
};
