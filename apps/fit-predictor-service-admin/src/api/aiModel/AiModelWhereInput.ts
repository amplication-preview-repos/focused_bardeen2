import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AiModelWhereInput = {
  accuracy?: FloatNullableFilter;
  f1Score?: FloatNullableFilter;
  id?: StringFilter;
  modelName?: StringNullableFilter;
  precision?: FloatNullableFilter;
  recall?: FloatNullableFilter;
};
