import { SortOrder } from "../../util/SortOrder";

export type AiModelOrderByInput = {
  accuracy?: SortOrder;
  createdAt?: SortOrder;
  f1Score?: SortOrder;
  id?: SortOrder;
  modelName?: SortOrder;
  precision?: SortOrder;
  recall?: SortOrder;
  updatedAt?: SortOrder;
};
