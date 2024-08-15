import { GarmentWhereInput } from "./GarmentWhereInput";
import { GarmentOrderByInput } from "./GarmentOrderByInput";

export type GarmentFindManyArgs = {
  where?: GarmentWhereInput;
  orderBy?: Array<GarmentOrderByInput>;
  skip?: number;
  take?: number;
};
