import { AiModel as TAiModel } from "../api/aiModel/AiModel";

export const AIMODEL_TITLE_FIELD = "modelName";

export const AiModelTitle = (record: TAiModel): string => {
  return record.modelName?.toString() || String(record.id);
};
